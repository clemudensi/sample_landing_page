import styled from 'styled-components';

const CollapsibleCard = styled.div<{isEmpty?: boolean}>`
	background-color: transparent;
	height: 100%;
	overflow: hidden;
`;

const CollapsibleDropDown = styled.div<{setHeight: number}>`
	background-color: transparent;
	width: 100%;
	height: 35px; /* changed */
	font-size: 1rem;
	line-height: 1rem;
	color: #FFF;
	display: flex;
	flex-direction: column;
	align-items: center;
	cursor: pointer;
	transition: all 0.3s ease-in-out;
	overflow: scroll;

	span {
		padding: 12px 0;
	}

	.accordion {
		padding: 10px 15px 15px; /* changed */
	}

	&.show {
		height: ${({ setHeight }) => setHeight}px;
	}
`;

export { CollapsibleCard, CollapsibleDropDown };
