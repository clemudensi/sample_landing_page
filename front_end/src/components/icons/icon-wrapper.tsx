import { FC } from 'react';
import { SvgContainer } from 'components';
import { SVGProps } from 'types';

const IconWrapper: FC<SVGProps> = props => {
    const { Icon, onClick } = props
    return (
        <SvgContainer {...props}>
            <Icon onClick={onClick} />
        </SvgContainer>
    )
};

export { IconWrapper };