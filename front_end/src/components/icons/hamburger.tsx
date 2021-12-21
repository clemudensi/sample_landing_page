import { VFC } from 'react';
import { IconWrapper } from '.';
import { SVGProps } from 'types';
import { ReactComponent as Hamburger }  from 'assets/svg/dept_icon_menu.svg';

interface HamburgerProps extends SVGProps{
    openMenu: () => void;
}

const HamburgerIcon: VFC<HamburgerProps> = (props) => {
    const { height, openMenu, width } = props;
    return (
        <IconWrapper Icon={Hamburger} width={width} onClick={openMenu} height={height} {...props} />
    )
};

export { HamburgerIcon };