import { VFC } from 'react';
import { IconWrapper } from '.';
import { SVGProps } from 'types';
import { ReactComponent as Logo }  from 'assets/svg/dept_logo_black.svg';

const DeptLogoBlack: VFC<SVGProps> = ({ color, height, width }) => {
    return (
        <IconWrapper Icon={Logo} color={color} height={height} width={width} />
    )
};

export { DeptLogoBlack };