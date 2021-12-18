import { VFC, useState } from 'react';
import * as Styled from 'components';
import { MenuDrawer } from 'components';

const Header: VFC = () => {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        console.log('I was clicked')
        setOpen(!open)
    };

    return (
        <>
            <Styled.NavHeader>
                <Styled.Container>
                    <Styled.DeptLogo />
                    <Styled.ContainerEnd>
                        <Styled.MenuText>menu</Styled.MenuText>
                        <Styled.HamburgerIcon openMenu={toggleMenu} /></Styled.ContainerEnd>
                </Styled.Container>
            </Styled.NavHeader>
            <MenuDrawer open={open} closeMenu={toggleMenu} />
        </>
    )
};

export { Header }