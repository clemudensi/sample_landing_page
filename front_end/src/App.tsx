import { VFC } from 'react';
import { ThemeProvider } from 'styled-components';
import { Header } from 'components';
import { LandingPage } from 'pages';
import { theme } from './theme';
import { GlobalStyles } from './GlobalStyles';

const App: VFC = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Header />
			<LandingPage />
		</ThemeProvider>
	);
};

export default App;
