import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	* {
		box-sizing: border-box;
	}

	body {
		font-family: MaisonNeueMG,Helvetica,Arial;
			'Ubuntu', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	::selection {
		background-color: #1A18F7;
		color: #FFF
	}
`;
