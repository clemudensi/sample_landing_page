import { styled } from 'theme';
import { HtmlAttr } from 'types';

const HeroImage = styled.img`
    height: 50%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    padding: ${({theme}) => theme.factor(1)};
    width: inherit;
`;

const HeroContainer = styled.div`
	display: flex;
	width: 100%;
	position: relative;
    margin-top: -${({theme}) => theme.factor(10.625)};
`;

const Container = styled.div`
	display: flex;
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
    bottom: ${({theme}) => theme.factor(8)};;
    right: ${({theme}) => theme.factor(16)};;
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
`;

const HorizontalLine = styled.hr<HtmlAttr>`
    width: ${(props) => props.color };
    text-align: left;
    margin-left: 0;
    border: none;
    height: ${(props) => props.height};
    background-color: ${(props) => props.color}
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
    position: sticky;
    top: 0;
    background-color: ${({theme}) => theme.colors.transparent};
    z-index: 99;
`

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
    height?: number
    width?: number
    }>`
        height: "auto";
        width: "auto";
        display: inline-flex;
        align-items: center;
        justify-content: center;

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