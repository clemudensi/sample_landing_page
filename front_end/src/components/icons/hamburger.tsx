import { VFC } from 'react';
import { IconWrapper } from '.';
import { ReactComponent as Hamburger }  from 'assets/svg/dept_icon_menu.svg';

type HamburgerProps = {
    openMenu: () => void;
}

const HamburgerIcon: VFC<HamburgerProps> = ({ openMenu }) => {
    return (
        <IconWrapper Icon={Hamburger} width={35} onClick={openMenu} />
    )
};

export { HamburgerIcon };