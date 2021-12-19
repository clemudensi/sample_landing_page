import { styled } from 'theme';
import { device } from './breakpoints';

const FooterContainer = styled.div`
    display: grid;
    width: 95%;
    background-color: ${({theme}) => theme.colors.black.dark};

    @media ${device.mobileL} {
        width: 100%;
    }
`;

const FooterGrid = styled.div`
    display: grid;
    grid-template-columns: 30% 40% 30%;
    grid-template-rows: repeat(2, auto);
    grid-template-areas:
        "logo content1 icons"
        "logo content2 copyright";
    grid-row-gap: ${({theme}) => theme.factor(4)};
    padding: 4rem 5rem;
    z-index: 99;
    margin: auto;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    box-shadow: 0 0 3px rgb(18 18 18 / 20%);
    -webkit-font-smoothing: antialiased;

    @media ${device.mobileL} {
        grid-template-columns: 80% 20%;
        grid-template-rows: repeat(3, auto);
        grid-template-areas:
            "content1 icons"
            "content2 content2"
            "copyright none";
        grid-row-gap: ${({theme}) => theme.factor(4)};
        padding: 1rem;
    }
`;

const Content1Grid = styled.div`
    color: ${({theme}) => theme.colors.white};
    grid-area: content1;
    text-transform: uppercase;
    cursor: pointer;

    @media ${device.mobileL} {
        inline-size: 150px;
        overflow-wrap: break-word;
        display: grid;
        font-size: ${({theme}) => theme.factor(4)};
        grid-gap: 0.7rem;
    }
`;

const Content2Grid = styled.div`
    color: #808080;
    grid-area: content2;
    display: flex;
    font-size: 0.7rem;
    justify-content: space-between;
    cursor: pointer;

    @media ${device.mobileL} {
        inline-size: 200px;
        overflow-wrap: break-word;
        display: grid;
        font-size: ${({theme}) => theme.factor(2)};
        font-size: 1rem;
        grid-row-gap: .7rem;
    }
`;

const IconGrid = styled.div`
    color: ${({theme}) => theme.colors.white};
    grid-area: icons;
    display: flex;
    font-size: 0.8rem;
    justify-self: end;
    cursor: pointer;

    @media ${device.mobileL} {
        overflow-wrap: break-word;
        display: block;
        padding: ${({theme}) => theme.factor(1)};
    }
`;

const CopyrightGrid = styled.div`
    grid-area: copyright;
    color: #808080;
    justify-self: right;
    font-size: 0.8rem;
    cursor: pointer;

    @media ${device.mobileL} {
        justify-self: flex-start;
    }
`;

const ContentItem = styled.span`
    color: ${({theme}) => theme.colors.white};
    padding-right: ${({theme}) => theme.factor(1)};
    justify-content: space-evenly;
`;

const IconSubGrid = styled.div`
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 3rem;
    display: grid;

    @media ${device.mobileL} {
        grid-template-columns: 1fr;
        grid-gap: 1rem;
    }
`;

const FooterLogoGrid = styled.div`
    grid-area: logo;

    @media ${device.mobileL} {
        display: none;
    }
`;

const ArrowTopSection = styled.div`
    color: ${({theme}) => theme.colors.primary};
    text-align: center;
    font-size: ${({theme}) => theme.factor(3)};
    text-transform: uppercase;
    width: 5%;

    @media ${device.mobileL} {
        display: none;
    }
`;

export {
    ArrowTopSection,
    Content1Grid,
    Content2Grid,
    ContentItem,
    CopyrightGrid,
    FooterContainer,
    FooterLogoGrid,
    FooterGrid,
    IconGrid,
    IconSubGrid
};
