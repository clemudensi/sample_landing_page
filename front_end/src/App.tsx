import { VFC } from 'react';
import { ThemeProvider } from 'styled-components';
import { Footer, Form, Header, HeroSection } from 'components';
import { theme } from './theme';
import { GlobalStyles } from './GlobalStyles';

const App: VFC = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Header />
			<HeroSection />
			<Form />
			<Footer />
		</ThemeProvider>
	);
};

export default App;
