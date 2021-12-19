import { VFC } from 'react';
import { IconWrapper } from '.';
import { SVGProps } from 'types';
import { ReactComponent as Icon }  from 'assets/svg/chevron_down.svg';

const ChevronDown: VFC<SVGProps> = ({ color, height = 16, width = 16 }) => {
    return (
        <IconWrapper Icon={Icon} color={color} height={height} width={width} />
    )
};

export { ChevronDown };