import { VFC } from 'react';
import { ThemeProvider } from 'styled-components';
import { Clients, Footer, Form, Header, HeroSection, Works } from 'components';
import { theme } from './theme';
import { GlobalStyles } from './GlobalStyles';

const App: VFC = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Header />
			<HeroSection />
			<Works />
			<Clients />
			<Form />
			<Footer />
		</ThemeProvider>
	);
};

export default App;
