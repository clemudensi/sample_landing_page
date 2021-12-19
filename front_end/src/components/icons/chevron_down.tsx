import { VFC } from 'react';
import { IconWrapper } from '.';
import { SVGProps } from 'types';
import { ReactComponent as Logo }  from 'assets/svg/chevron_down.svg';

const ChevronDown: VFC<SVGProps> = ({ color, height = 16, width = 16 }) => {
    return (
        <IconWrapper Icon={Logo} color={color} height={height} width={width} />
    )
};

export { ChevronDown };