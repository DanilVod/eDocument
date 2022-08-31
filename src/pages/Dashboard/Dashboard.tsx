import React, { useState } from 'react'

import { Button, Placeholder, Typography } from '@/components/atoms'
import Input from '@/components/atoms/Input/Input'

import ErrorIcon from '@/assets/icons/Error.svg?component'

const Dashboard = () => {
	const [value, setValue] = useState<string>('')
	const changeValue = (val: string) => setValue(val)
	return (
		<div>
			<Button onClick={() => console.log(111)} size={'large'} _type="primary" icon={<ErrorIcon />}>
				<Typography type="p-large">Войти</Typography>
			</Button>
			<Input placeholder="Введите " value={value} width="500px" onChange={(e) => setValue(e.target.value)} setValue={changeValue} />
		</div>
	)
}

export default Dashboard
