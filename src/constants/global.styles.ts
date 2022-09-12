import { createGlobalStyle } from 'styled-components'

export type ColorsName = keyof typeof colors
export const colors = {
	SElifeGreen: '#3DCD58',
	SElogoGreen: '#009530',
	SEDarkGray: '#626469',
	SELightGray: '#9FA0A4 ',
	SEsunflowerYellow: '#FFD100 ',
	SEhoneysuckleOrange: '#E47F00',
	SEfuchsiaRed: '#B10043',
	SEskyBlue: '#42B4E6',
	white: '#FFFFFF',
	black: '#000000',
	red: '#ED455D',
	LightGray: '#F0F0F2',
	DisabledGray: '#AAAEB0',
	GreenBright: '#4DE469',
	TableTitleGray: '#787D8A',
	TableTitleGrayBG: '#F8FAFB',
	TextLightGray: '#7C858A',
	BorderGray: '#E7E8E7',
	LightGreen: '#EDFAEE',
	none: ''
}

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
  }
`
