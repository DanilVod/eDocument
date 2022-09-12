import React, { useState } from 'react'

import ProviderForm from '@/components/molecules/ProviderForm/ProviderForm'

import { Button, Placeholder, Typography } from '@/components/atoms'
import Input from '@/components/atoms/Input/Input'
import Select from '@/components/atoms/Select/Select'

import DownloadIcon from '@/assets/icons/Download.svg?component'
import ErrorIcon from '@/assets/icons/Error.svg?component'

const Dashboard = () => {
	const [value, setValue] = useState<string>('')
	const changeValue = () => setValue('')
	const list = [
		{ prefixIcon: <DownloadIcon />, text: 'Какой-то текст1' },
		{ prefixIcon: <DownloadIcon />, text: 'Какой-то текст2' },
		{ prefixIcon: <DownloadIcon />, text: 'Какой-то текст3' },
		{ prefixIcon: <DownloadIcon />, text: 'Какой-то текст4' },
		{ prefixIcon: <DownloadIcon />, text: 'Какой-то текст5' }
	]

	return (
		<div>
			<Button onClick={() => console.log(111)} size={'large'} _type="primary" icon={<DownloadIcon />}>
				<Typography type="p-large">Войти</Typography>
			</Button>

			<ProviderForm />
		</div>
	)
}

export default Dashboard
