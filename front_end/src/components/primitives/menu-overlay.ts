import { styled } from 'theme';
import { device } from './breakpoints';

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
    &:hover {
        color: #f1f1f1;
    }
    &:focus {
        color: #f1f1f1;
    }
`;

const MenuLinks = styled.li`
    text-decoration: none;
    font-size: 3.75rem;
    line-height: 1.25;
    color: #818181;
    display: block;
    cursor: pointer;
    &:hover {
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
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
`;

const LinkInfo = styled.a`
    color: #818181;
    opacity: 1;
    visibility: inherit;
    transform: translate(0px, 0px);
    margin: 0;
    padding: 0;
    text-decoration: none;
    cursor: pointer;
    letter-spacing: .25px;
    &:hover {
        color: #f1f1f1;
    }
`;

const LinkInfoButton = styled.span`
    color: #fff;
    outline: none;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    cursor: pointer;
`;

const DrawerMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(4,auto);
    grid-template-areas:
        "logo logo"
        "contact menu"
        "location menu"
        "location social";
    grid-row-gap: 0;
    padding: 4rem 5rem;
    position: fixed;
    top: 0;
    z-index: 99;
    margin: auto;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    box-shadow: 0 0 3px rgb(18 18 18 / 20%);
    -webkit-font-smoothing: antialiased;
    transition: transform .3s ease-in-out,opacity .3s ease-in-out;
`;

const LogoGrid = styled.div`
    opacity: 1;
    visibility: inherit;
    grid-area: logo;
`;

const ContactGrid = styled.a`
    color: ${({theme}) => theme.colors.white};
    grid-area: contact;
    visibility: inherit;
    transform: translate(0px, 0px);
    margin: 0;
    padding: 0;
    text-decoration: none;
    cursor: pointer;
`;

const DrawerLinks = styled.div`
    grid-area: menu;
`;

const SocialGrid = styled.div`
    flex-wrap: nowrap;
    justify-content: space-between;
    align-self: flex-end;
    grid-area: social;
    display: flex;
`;

const LocationGrid = styled.div`
    grid-area: location;
    align-self: flex-end;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const GetInTouch = styled.h2`
    text-align: left;
    font-size: 2.1rem;
    line-height: 1.25;
    font-weight: 300;
    margin-bottom: 20px;
    left: 0;
`;

const WorkImage = styled.img`
    top: 200px;
    left: 150px;
    position: absolute;
    width: 45%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    @media ${device.mobileL} {
        top: 70px;
        left: 30px;
        back-ground: transparent;
        position: absolute;
        width: 50%;
    }
`;

const LocationList = styled.li`
    text-decoration: none;
    line-height: 1.25;
    color: #FFF;
`;

export {
    ContactGrid,
    DrawerLinks,
    DrawerMenu,
    GetInTouch,
    LinkInfo,
    LinkInfoButton,
    LocationGrid,
    LocationList,
    LogoGrid,
    MenuCloseButton,
    MenuLinks,
    MenuList,
    MenuOverlay,
    SocialGrid,
    WorkImage
};