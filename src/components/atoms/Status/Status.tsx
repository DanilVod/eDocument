import React from 'react'

import { allStatus } from '@/types/share'

import { StyledStatus } from './Status.style'
import { Typography } from '@/components/atoms'

export interface StatusComponentProps {
	type: allStatus
	iconsConfig?: { [key in allStatus]?: JSX.Element }
}

export const Status = ({ type, iconsConfig }: StatusComponentProps) => {
	return (
		<StyledStatus type={type}>
			<div
				style={{ padding: '1px 10px', display: 'flex', alignItems: 'center' }}
			>
				<div style={{ marginRight: '5px' }}>
					{' '}
					{iconsConfig && iconsConfig[type]}
				</div>
				<Typography size={11} color="white" weight="medium">
					{type}
				</Typography>
			</div>
		</StyledStatus>
	)
}
