import React from 'react'

import { Button, Typography } from '@/components/atoms'

const Dashboard = () => {
	return (
		<div>
			<Button onClick={() => console.log(111)} size={'large'} type="ghost" color="SElifeGreen">
				<Typography type="p-large">Войти</Typography>
			</Button>
		</div>
	)
}

export default Dashboard
