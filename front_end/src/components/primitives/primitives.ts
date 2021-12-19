import { styled } from 'theme';
import { HtmlAttr } from 'types';
import { device } from './breakpoints';

const HeroImage = styled.img`
    height: 50%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    padding: ${({theme}) => theme.factor(2)};
    width: inherit;

    @media ${device.mobileL} {
        max-width: 450px;
        padding: 0;
    }
`;

const HeroContainer = styled.div`
	width: 100%;
	position: absolute;
    top: 0;
    text-align: center;

    @media ${device.mobileL} {
        max-width: 450px;
        position: relative;
    }
`;

const ContainerFlex = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
`;

const Container = styled.div`
	display: inherit;
	width: 100%;
	align-items: center;
`;

const HeroText = styled.div`
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
`;

const HeroButton = styled.button`
    position: absolute;
    bottom: ${({theme}) => theme.factor(8)};
    right: ${({theme}) => theme.factor(16)};
    order: none;
    outline: 0;
    display: inline-block;
    padding: ${({theme}) => `${theme.factor(1.25)} ${theme.factor(3)}`};
    color: ${({theme}) => theme.colors.white};
    background-color: #0E0E0E;
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;
    border: 1px solid ${({theme}) => theme.colors.black.dark};

    @media ${device.mobileL} {
        position: relative;
        bottom: 0;
        right: 0;
    }
`;

const HorizontalLine = styled.hr<HtmlAttr>`
    width: ${(props) => props.color };
    text-align: left;
    margin-left: 0;
    border: none;
    height: ${(props) => props.height};
    background-color: ${(props) => props.color};
    margin-top: ${({theme}) => theme.factor(3)};

    @media ${device.mobileL} {
        display: none;
    }
`;

const ContentCardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	position: static;
	background: ${({theme}) => theme.colors.white};
	box-shadow: 0 0 3.125rem rgba(50, 50, 50, 0.1);
	border-radius: ${({theme}) => theme.factor(1)};
	flex: none;
	align-self: stretch;
	flex-grow: 1;
	height: inherit;
`;

const CartTitle = styled.span`
	font-size: ${({theme}) => theme.factor(4)};
	font-weight: 500;
    color: ${({theme}) => theme.colors.black};
`;

const ContainerEnd = styled.div`
	margin-left: auto;
`;

const SubTitle = styled.span`
    font-size: ${({theme}) => theme.factor(2)};
    font-weight: 500;
    color: ${({theme}) => theme.colors.grey};
    text-transform: uppercase;
`;

const CardLink = styled.span`
    font-size: ${({theme}) => theme.factor(1)};
    font-weight: 500;
    color: ${({theme}) => theme.colors.primary};
    text-transform: uppercase;
`;

const NavHeader = styled.div`
    padding: ${({theme}) => `${theme.factor(8)} ${theme.factor(8)} 0 ${theme.factor(8)}`};
    background-color: ${({theme}) => theme.colors.transparent};
    z-index: 99;
    position: fixed;
    width: -webkit-fill-available;

    @media ${device.mobileL} {
        max-width: 450px;
        position: relative;
        padding: ${({theme}) => `${theme.factor(2)} ${theme.factor(2)} ${theme.factor(2)} ${theme.factor(2)}`};
    }

`;

const ImageContainer = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	max-width: 100%;
	max-height: 100%;
	display: block;

	@media (max-width: 480px) {
		height: 50px
	}
`;

const SvgContainer = styled.div<{
    color?: string;
    height?: number
    width?: number
    }>`
        height: "auto";
        width: "auto";
        display: inline-flex;
        align-items: center;
        justify-content: center;
        z-index: 100;
        & svg {
            height: ${props => (props.height ? `${props.height}px` : "100%")};
            width: ${props => (props.width ? `${props.width}px` : "100%")};
        }
`;

const MenuText = styled.span`
    text-transform: uppercase;
    font-family: sans-serif;
    font-weight: 500;
    padding: ${({theme}) => `0 ${theme.factor(1)}`};
`

export {
    CardLink,
    CartTitle,
    Container,
    ContainerFlex,
    ContentCardWrapper,
    ContainerEnd,
    ImageContainer,
    HeroButton,
    HeroContainer,
    HeroImage,
    HeroText,
    HorizontalLine,
    MenuText,
    NavHeader,
    SubTitle,
    SvgContainer
}