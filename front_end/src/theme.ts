import baseStyled, { ThemedStyledInterface } from 'styled-components';
import { ThemeProps } from 'types';

const colors = {
	black: {
		dark: '#0E0E0E',
		overlay: '#272727',
	},
	grey: '#939393',
	primary: '#1A18F7',
	purple: '#BF40BF',
	red: '#FF2929',
	transparent: 'transparent',
	white: '#FFFFFF',
};

const factor = (factor: number): string => `${0.5 * factor}rem`

const theme: ThemeProps = {
	colors,
	factor,
};

export type Theme = typeof theme;
const styled = baseStyled as ThemedStyledInterface<Theme>;

export { colors, styled, theme };
