import { styled } from 'theme';
import { device } from './breakpoints';

const ClientContainer = styled.div`
    background-color: #F3F6F6;
    width: 100%;
    text-align: -webkit-center;
    padding: 6vw 0;
`;

const ClientLogos = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: calc(2vw + 1rem);
    padding: calc(2vw + 1.2rem);
    width: calc((50% - 3vw ) * 2);

    @media ${device.mobileL} {
        grid-template-columns: repeat(2, 1fr);
    }
`;

export { ClientContainer, ClientLogos };