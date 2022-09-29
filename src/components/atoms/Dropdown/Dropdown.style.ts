import styled from 'styled-components'

import { colors, defaultBorderRadius } from '@/constants/global.styles'

export const Root = styled.div`
	display: flex;

	position: relative;
`

export const IconWrapper = styled.div<{ isOpen: boolean }>`
	transform: ${(props) => (props.isOpen ? `rotate(180deg)` : '')};
	transition: all 0.3s ease-out;
`

export const MenuContainer = styled.div`
	display: flex;
	background-color: ${colors['TableTitleGrayBg']};
	padding: 6px 8px 6px 16px;
	border-radius: ${defaultBorderRadius};
	align-items: center;
	cursor: pointer;
`
export const Control = styled.button`
	width: 100%;
	margin: 0;
	padding: 0;
`
export const Menu = styled.div`
	position: absolute;
	z-index: 1000;
	border-radius: ${defaultBorderRadius};
	padding: 24px 24px;
	top: 45px;
	background-color: #fff;
	box-shadow: -5px -5px 10px 0px rgba(0, 0, 0, 0.05);
	box-shadow: 5px 5px 10px 0px rgba(79, 79, 79, 0.05);
`
