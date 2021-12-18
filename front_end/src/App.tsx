import { VFC } from 'react';
import { ThemeProvider } from 'styled-components';
import { Header, HeroSection } from 'components';
import { theme } from './theme';

const App: VFC = () => {
	return (
		<ThemeProvider theme={theme}>
			<Header />
			<HeroSection />
		</ThemeProvider>
	);
};

export default App;
