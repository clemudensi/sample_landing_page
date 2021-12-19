import { VFC } from 'react';
import * as Styled from 'components';
import { MENU_LINKS, SOCIAL_LINKS } from 'const';

interface OverlayProps {
    open: boolean;
    closeMenu: () => void;
}

const MenuDrawer: VFC<OverlayProps> = ({ open, closeMenu }) => {
    return (
        <Styled.MenuOverlay open={open}>

            <Styled.DrawerMenu>
                <Styled.LogoGrid>
                    <Styled.DeptLogoWhite />
                </Styled.LogoGrid>
                <Styled.ContactGrid>
                    <Styled.GetInTouch>Get in Touch</Styled.GetInTouch>
                    <Styled.LinkInfoButton>Contact</Styled.LinkInfoButton>
                </Styled.ContactGrid>
                <Styled.DrawerLinks>
                    <Styled.MenuList>
                        {
                            MENU_LINKS.map(link => <Styled.MenuLinks key={link}>{link}</Styled.MenuLinks>)
                        }
                    </Styled.MenuList>
                </Styled.DrawerLinks>
                <Styled.SocialGrid>
                    {
                        SOCIAL_LINKS.map(link => <Styled.LinkInfo key={link}>{link}</Styled.LinkInfo>)
                    }
                </Styled.SocialGrid>
                <Styled.LocationGrid>
                    <Styled.Collapsible />
                </Styled.LocationGrid>
                <Styled.LogoGrid>
                    <Styled.MenuCloseButton onClick={closeMenu}>&times;</Styled.MenuCloseButton>
                </Styled.LogoGrid>
            </Styled.DrawerMenu>
        </Styled.MenuOverlay>
    )
};

export { MenuDrawer };