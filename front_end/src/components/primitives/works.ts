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

const ImageWithTextContainer = styled.div`
    display: grid;
    grid-template-columns: 65% 30%;
    grid-gap: 1.5vw;

    @media ${device.mobileL} {
        grid-template-columns: 1fr;
    }
`;

export {
    ImageWithTextContainer,
    ShowWorks,
    ShowWorksContainer,
    WorksTextBox
};