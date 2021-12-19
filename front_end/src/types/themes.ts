interface Colors {
	black: {
		dark: string;
		overlay: string;
	},
	grey: string,
	primary: string,
	purple: string,
	red: string,
	transparent: string,
	white: string,
}

interface ThemeProps {
    colors: Colors;
    factor: (arg: number) => string;
}

export type { Colors, ThemeProps };