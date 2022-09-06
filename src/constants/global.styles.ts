import { createGlobalStyle } from 'styled-components'

export type ColorsName = keyof typeof colors
export const defaultBorderRadius = '8px'
export const colors = {
	accentBlue: '#109CF1',
	yellow: '#FFB946',
	red: '#F7685B',
	green: '#2ED47A ',
	purple: '#885AF8 ',
	black: '#192A3E',
	white: '#FFFFFF',
	darkBlue: '#334D6E',
	iconGray: '#C2CFE0',
	textHelpGray: '#818E9B',
	textLine: '#D3D8DD',
	TableTitleGrayBg: '#F8FAFB',
	SELightGray: '#9FA0A4',
	SELifeGreen: '#3DCD58',
	none: ''
}

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
  }
`
