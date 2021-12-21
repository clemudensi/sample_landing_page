import { VFC, useState } from 'react';
import * as Styled from 'components';
import { useStickyHeader } from 'hooks';

const Header: VFC = () => {
    const [open, setOpen] = useState(false);
    const { headerRef, isSticky } = useStickyHeader();

    const toggleMenu = () => {
        setOpen(!open)
    };

    return (
        <>
            <Styled.NavHeader>
                <Styled.ContainerFlex>
                    {
                        !isSticky && <Styled.DeptLogoBlack width={72} data-testid="header-logo" />
                    }
                    <Styled.ContainerEnd>
                        {
                            !isSticky && <Styled.MenuText>menu</Styled.MenuText>
                        }
                        <Styled.HamburgerIcon openMenu={toggleMenu} width={15} data-testid="open-menu" />
                    </Styled.ContainerEnd>
                </Styled.ContainerFlex>
                {
                    !isSticky && <Styled.HorizontalLine width='100%' height='.05rem' color='black' data-testid="header-hr" />
                }
            </Styled.NavHeader>
            <Styled.MenuDrawer open={open} closeMenu={toggleMenu} />
            <div ref={headerRef} />
        </>
    )
};

export { Header }