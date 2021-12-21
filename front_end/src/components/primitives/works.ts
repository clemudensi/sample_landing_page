import { styled } from 'theme';
import { device } from './breakpoints';

const ShowWorks = styled.p`
    font-size: ${({theme}) => theme.factor(4)};
    color: #A3A3A3;
`;

const ShowWorksContainer = styled.div`
    padding: 0 4vw;
`;

const WorksTextBox = styled.div`
    border: .5px solid #A3A3A3;
    border-left: none;
    border-right: none;
    display: block;
    margin: 0 2vw;
`;

const ImageWithTextContainer = styled.div<{direction?: string;}>`
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: repeat(2, auto);
    grid-template-areas:
        "img content"
        "details content";
    grid-gap: 1.5vw;

    @media ${device.mobileL} {
        display: block;
    }
`;


const ImageWithTextInverted = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: repeat(2, auto);
    grid-template-areas:
        "content img"
        "content details";
    grid-gap: 1.5vw;

    @media ${device.mobileL} {
        display: block;
    }
`;

const WorksGridImage = styled.div`
    grid-area: img;
`;

const WorksGridContent = styled.div`
    grid-area: content;
`;

const WorksGridDetails = styled.div`
    grid-area: details;
`;

export {
    ImageWithTextContainer,
    ImageWithTextInverted,
    ShowWorks,
    ShowWorksContainer,
    WorksTextBox,
    WorksGridContent,
    WorksGridDetails,
    WorksGridImage
};