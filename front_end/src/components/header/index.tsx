import { VFC, useState } from 'react';
import * as Styled from 'components';

const Header: VFC = () => {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!open)
    };

    return (
        <>
            <Styled.NavHeader>
                <Styled.ContainerFlex>
                    <Styled.DeptLogoBlack width={72} />
                    <Styled.ContainerEnd>
                        <Styled.MenuText>menu</Styled.MenuText>
                        <Styled.HamburgerIcon openMenu={toggleMenu} width={35} />
                    </Styled.ContainerEnd>
                </Styled.ContainerFlex>
                <Styled.HorizontalLine width='100%' height='.07rem' color='black' />
            </Styled.NavHeader>
            <Styled.MenuDrawer open={open} closeMenu={toggleMenu} />
        </>
    )
};

export { Header }