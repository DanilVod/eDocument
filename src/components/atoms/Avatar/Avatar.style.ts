import styled, { css } from 'styled-components'

import { AvatarProps, avatarSize } from './Avatar'
import { colors } from '@/constants/global.styles'

const convertSizeFromEnumTo = (size: avatarSize) => {
	switch (size) {
		case 'large':
			return '104px'
		case 'medium':
			return '46px'
		default:
			return '24px'
	}
}

const handleAvatarType = (size: avatarSize) => {
	switch (size) {
		case 'large':
			return ContactAvatar
		case 'medium':
			return ProfileAvatar
		default:
			return AssociatedAvatar
	}
}

const ContactAvatar = css`
	position: relative;
	height: 104px;
	width: 104px;
`
const ProfileAvatar = css`
	position: relative;
	height: 46px;
	width: 46px;
	&.active {
		border: 2px solid ${colors['accentBlue']};
	}
`
const AssociatedAvatar = css`
	position: relative;
	height: 24px;
	width: 24px;
`
export const StyledAvatar = styled.img<Pick<AvatarProps, 'size'>>`
	width: 50px;
	border-radius: 50%;
	${({ size = 'small' }) => handleAvatarType(size)}
`
export const AvatarContainer = styled.div`
	display: block;
	position: relative;
`

export const AvatarHover = styled.div<Required<Pick<AvatarProps, 'size'>>>`
	&::after {
		content: '';
		width: ${({ size }) => convertSizeFromEnumTo(size)};
		height: ${({ size }) => convertSizeFromEnumTo(size)};
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: ${colors['black']};
		opacity: 0;
		border-radius: 50%;
		cursor: pointer;
	}
	&:hover {
		&:after {
			opacity: 0.4;
		}
	}
`
