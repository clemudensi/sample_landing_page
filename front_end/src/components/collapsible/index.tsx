import { useEffect, useRef, useState } from 'react';
import * as Styled from 'components';
import { LOCATIONS } from 'const';

const Collapsible = () => {
	const [expanded, setExpanded] = useState(false);
	const [accordionHeight, setAccordionHeight] = useState(0);
	const ref = useRef<HTMLDivElement>(null);

	const open = () => setExpanded(!expanded);

	useEffect(() => {
		const getHeight = ref?.current?.scrollHeight;
		setAccordionHeight(getHeight ?? 0);
	}, [expanded]);

	return (
		<>
			<Styled.CollapsibleCard>
				<Styled.CollapsibleDropDown
					onClick={open}
					className={expanded ? 'show' : ''}
					setHeight={accordionHeight}
					ref={ref}
				>
					<Styled.LinkInfoButton>Change Location {
						expanded ? <Styled.ChevronUp width={32} color='white' /> :
							<Styled.ChevronDown width={32} color='white' />
						}
					</Styled.LinkInfoButton>
					<div className="accordion" ref={ref}>
					<Styled.MenuList>
						{
							LOCATIONS.map(location =>
								<Styled.LocationList key={location}>{location}</Styled.LocationList>
							)
						}
					</Styled.MenuList>
					</div>
				</Styled.CollapsibleDropDown>
			</Styled.CollapsibleCard>
		</>
	);
};

export { Collapsible };