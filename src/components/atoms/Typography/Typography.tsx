import { ReactNode } from 'react'
import React from 'react'
import styled, { css } from 'styled-components'

import { ColorsName, colors } from '@/constants/global.styles'

interface TypographyProps {
	weight?: 'normal' | 'medium' | 'semibold'
	size?: number
	children: ReactNode
	color?: ColorsName
	type: TypographyType
	isInput?: boolean
}

type TypographyType = 'h1' | 'h2' | 'h3' | 'h4' | 'h4-bold' | 'h5' | 'p-large' | 'p-medium' | 'p-small'

const handleTypographyType = (type: TypographyType) => {
	switch (type) {
		case 'h1':
			return H1Text
		case 'h2':
			return H2Text
		case 'h3':
			return H3Text
		case 'h4':
			return H4Text
		case 'h4-bold':
			return H4BoldText
		case 'h5':
			return H5Text
		case 'p-large':
			return PLargeText
		case 'p-medium':
			return PMediumText
		case 'p-small':
			return PSmallText
		default:
			return PSmallText
	}
}

const H1Text = css`
	font-size: 50px;
	line-height: 52px;
	font-weight: 400;
`

const H2Text = css`
	font-size: 32px;
	line-height: 36px;
	font-weight: 700;
`

const H3Text = css`
	font-size: 24px;
	line-height: 32px;
	font-weight: 400;
`

const H4Text = css`
	font-size: 18px;
	line-height: 24px;
	font-weight: 400;
`

const H4BoldText = css`
	font-size: 18px;
	line-height: 24px;
	font-weight: 700;
`

const H5Text = css`
	font-size: 15px;
	line-height: 24px;
	font-weight: 400;
`

const PLargeText = css`
	font-size: 15px;
	line-height: 18px;
	font-weight: 400;
`

const PMediumText = css`
	font-size: 13px;
	line-height: 20px;
	font-weight: 400;
`

const PSmallText = css`
	font-size: 9px;
	line-height: 0px;
	font-weight: 400;
`

const StyledText = styled.div<TypographyProps>`
	color: ${({ color }) => colors[color || 'none']};
	font-family: 'Arial';
	${({ type = 'p-small' }) => handleTypographyType(type)}
	width: ${({ isInput }) => (isInput ? '100%' : 'auto')};
`
export const Typography = (props: TypographyProps) => {
	return <StyledText {...props}>{props.children}</StyledText>
}
