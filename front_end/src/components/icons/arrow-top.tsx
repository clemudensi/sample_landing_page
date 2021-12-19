import { VFC } from 'react';
import { IconWrapper } from '.';
import { SVGProps } from 'types';
import { ReactComponent as Icon }  from 'assets/svg/icon_scroll_to_top.svg';

const ArrowTop: VFC<SVGProps> = ({ color, height = 16, width = 16 }) => {
    return (
        <IconWrapper Icon={Icon} color={color} height={height} width={width} />
    )
};

export { ArrowTop };