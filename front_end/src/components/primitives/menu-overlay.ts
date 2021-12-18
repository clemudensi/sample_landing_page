import styled from 'styled-components';

const MenuOverlay = styled.div<{
    open: boolean;
}>`
    height: 100%;
    width: ${({ open }) => open ? '100%' : '0'};
    position: fixed;
    z-index: 100;
    right: 0;
    top: 0;
    background-color: rgb(0,0,0);
    overflow-x: hidden;
    transition: 0.5s;
    &:hover {
        color: #f1f1f1;
    }
    &:focus {
        color: #f1f1f1;
    }
`;

const MenuGrid = styled.div`
    position: relative;
    top: 25%;
    width: 100%;
    text-align: center;
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;

const MenuLinks = styled.div`
    padding: .5rem;
    text-decoration: none;
    font-size: 2.25rem;
    color: #818181;
    display: block;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
        color: #f1f1f1;
    }
    &:focus {
        color: #f1f1f1;
    }
`;

const MenuCloseButton = styled.div`
    position: absolute;
    top: 1.25rem;
    right: 2.75rem;
    font-size: 3.8rem;
    cursor: pointer;
`;

const MenuList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    pointer-events: none;
`;

const SocialLinkContainer = styled.div`
    flex-wrap: nowrap;
    justify-content: space-between;
    align-self: flex-end;
`;

const SocialLinks = styled.div`
    justify-content: flex-start;
    flex: 0;
    margin-bottom: 0;
    display: flex;
`;

const LinkInfo = styled.a`
    opacity: 1;
    visibility: inherit;
    transform: translate(0px, 0px);
    margin: 0;
    padding: 0;
    color: unset;
    text-decoration: none;
`;

const LinkInfoButton = styled.button`
    color: #fff;
    outline: none;
    background: 0 0;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    cursor: pointer;
`;

export {
    LinkInfo,
    LinkInfoButton,
    MenuCloseButton,
    MenuGrid,
    MenuLinks,
    MenuList,
    MenuOverlay,
    SocialLinks,
    SocialLinkContainer
};