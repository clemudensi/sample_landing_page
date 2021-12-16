import { VFC } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { StylesProvider } from '@mui/styles';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

const App: VFC = () => {
	return (
		<StylesProvider injectFirst>
			<MuiThemeProvider theme={theme}>
				<ThemeProvider theme={theme}>
					<div>This is a React App</div>
				</ThemeProvider>
			</MuiThemeProvider>
		</StylesProvider>
	);
};

export default App;
