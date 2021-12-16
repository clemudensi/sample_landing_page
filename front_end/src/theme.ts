import { createTheme } from '@mui/material/styles';

const colors = {
	black: '#272727',
	primary: '#1A18F7',
	accent: '#939393',
	purple: '#BF40BF',
	red: '#FF2929',
	transparent: 'transparent',
	white: '#FFFFFF',
};

const theme = createTheme({
	components: {
		MuiChip: {
			styleOverrides: {
				root: {
					"&$selected": {
						backgroundColor: '#1A18F7',
						"&:hover": {
								backgroundColor: '#BF40BF',
						},
					},
				},
			},
		},
	},
	spacing: (factor: number) => `${0.5 * factor}rem`,
	palette: {
		primary: {
				main: colors.primary,
		},
		secondary: {
			light: colors.accent,
				main: colors.black,
		},
	},
	typography: {
		fontSize: 15,
		fontFamily: 'Roboto", Helvetica, Arial, sans-serif',
		body1: {
				fontSize: '1rem',
		},
		h1: {
				fontSize: '2.5rem', // 34px
		},
		h2: {
				fontSize: '2rem', // 28px
		},
		h3: {
				fontSize: '1.725rem', // 22px
		},
		h4: {
				fontSize: '1.25rem', // 20px
		},
		caption: {
				fontSize: '0.6875rem', // 11px
		},
	},
});

export { colors, theme }