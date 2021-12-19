import { VFC } from 'react';
import { ThemeProvider } from 'styled-components';
import { Header, HeroSection } from 'components';
import { theme } from './theme';
import { GlobalStyles } from './GlobalStyles';

const App: VFC = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Header />
			<HeroSection />
		</ThemeProvider>
	);
};

export default App;
