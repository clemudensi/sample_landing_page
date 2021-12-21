import { styled } from 'theme';
import { device } from './breakpoints';

const FormSection = styled.div`
    display: flex;
    width: 100%;
    padding: ${({theme}) => theme.factor(8)};
    flex-direction: row;

    @media ${device.mobileL} {
        flex-direction: column;
        padding: ${({theme}) => theme.factor(2)};
    }
`

const FormInput = styled.input`
    border: none;
    display: block;
    margin-bottom: ${({theme}) => theme.factor(2)};
    padding-right: 2rem;
    border-bottom: solid 1px black;
    outline: none;
    font-size: ${({theme}) => theme.factor(3)};
    width: -webkit-fill-available;
    &:focus {
        border-bottom:solid 2px #1A18F7;
        opacity: 1;
        color: #1A18F7;
    }
    @media ${device.mobileL} {
        max-width: -webkit-fill-available;
    }
`;

const FormText = styled.textarea`
    border: none;
    display: block;
    margin-bottom: 1.5rem;
    padding: 0.75rem;
    border-bottom: solid 1px black;
    outline: none;

    &:focus {
        border-bottom:solid 2px #1A18F7;
        opacity: 1;
        color: #1A18F7;
    }
`;

const FormContainer = styled.div`
    display: grid;
    width 50%;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(2, auto);
    grid-gap: 3.5rem;
    grid-template-areas:
        "name email"
        "message message";
    margin: ${({theme}) => `${theme.factor(4)} ${theme.factor(8)}`};

    @media ${device.mobileL} {
        width: 90%;
        display: block;
        margin: ${({theme}) => `${theme.factor(2)}`};
    }
`

const FormLabel = styled.label`
    font-size: 0.8rem;
    text-transform: uppercase;
`;

const FormHeader = styled.span`
    font-size: calc(3vw + 1rem);
    text-transform: uppercase;
    max-width: 23%;
    overflow-wrap: break-word;

    @media ${device.mobileL} {
        display: block;
        font-size: 4vh;
        max-width: -webkit-fill-available;
    }
`;

const FormErrorLabel = styled.span`
    font-size: .7rem;
    color: ${({theme}) => theme.colors.red};
`;

const InputGrid = styled.div<{name?: string, width?: string}>`
    grid-area: ${(props) => props.name};
    width: ${(props) => props.width};

    @media ${device.mobileL} {
        width: 100%;
    }
`;

export {
    FormContainer,
    FormErrorLabel,
    FormHeader,
    FormInput,
    FormLabel,
    FormSection,
    FormText,
    InputGrid
};