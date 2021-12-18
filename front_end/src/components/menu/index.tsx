import { VFC } from 'react';
import * as Styled from 'components';

interface OverlayProps {
    open: boolean;
    closeMenu: () => void;
}

const MenuDrawer: VFC<OverlayProps> = ({ open, closeMenu }) => {
    return (
        <Styled.MenuOverlay open={open}>
            <Styled.MenuCloseButton onClick={closeMenu}>&times;</Styled.MenuCloseButton>
            <Styled.MenuGrid>
                <Styled.MenuLinks>About</Styled.MenuLinks>
                <Styled.MenuLinks>Service</Styled.MenuLinks>
                <Styled.MenuLinks>Clients</Styled.MenuLinks>
            </Styled.MenuGrid>
        </Styled.MenuOverlay>
    )
};

export { MenuDrawer };