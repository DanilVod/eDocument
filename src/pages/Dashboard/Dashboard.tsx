import React, { useState } from 'react'

import Forms, { formConfig } from '@/components/organisms/Forms'

import DataPicker, { DatePickerDate } from '@/components/molecules/DataPicker/DataPicker'

import Input from '@/components/atoms/Input/Input'
import Select from '@/components/atoms/Select/Select'

import DownloadIcon from '@/assets/icons/Download.svg?component'

const Dashboard = () => {
	interface IFormItem<T> {
		value: T
	}
	interface IProvider {
		name: IFormItem<string>
		email: IFormItem<string>
		town: IFormItem<string>
		status: IFormItem<string[]>
		date: IFormItem<DatePickerDate>
	}

	const initValue = {
		name: { value: '' },
		email: { value: '' },
		town: { value: '' },
		status: { value: [] },
		date: { value: { from: null, to: null } }
	}
	const [provider, setProvider] = useState<IProvider>(initValue)

	const handleInputChange = (name: string, value: string) => {
		setProvider({ ...provider, [name]: { value: value } })
	}
	const handleDatePickerChange = (name: string, value: DatePickerDate) => {
		setProvider({ ...provider, [name]: { value: value } })
	}

	const handleSelectChange = (name: string, value: string | string[]) => {
		setProvider({ ...provider, [name]: { value: value } })
	}

	const handleMultySelectChange = (name: string, values: string | string[]) => {
		setProvider({ ...provider, [name]: { value: [...values] } })
	}

	const handleSubmit = () => {
		console.log(provider)
	}

	const towns = [
		{ prefixIcon: '', text: 'Волгоград' },
		{ prefixIcon: <DownloadIcon />, text: 'Питер' },
		{ prefixIcon: <DownloadIcon />, text: 'Москва' },
		{ prefixIcon: <DownloadIcon />, text: 'Екатеринбург' },
		{ prefixIcon: <DownloadIcon />, text: 'Пермь' }
	]

	const status = [
		{ prefixIcon: '', text: 'Ознакомлен' },
		{ prefixIcon: <DownloadIcon />, text: 'Просрочено' },
		{ prefixIcon: <DownloadIcon />, text: 'Отозвано' },
		{ prefixIcon: <DownloadIcon />, text: 'Требуется оригинал' },
		{ prefixIcon: <DownloadIcon />, text: 'Требуется согласие' }
	]
	const formConfig: formConfig[] = [
		{
			component: DataPicker,
			values: {
				required: true,
				multy: true,
				name: 'date',
				label: 'Период',
				value: provider.date.value,
				onChange: handleDatePickerChange
			}
		},
		{
			component: Select,
			values: {
				required: true,
				multy: false,
				name: 'town',
				label: 'Город',
				value: provider.town.value,
				onChange: handleSelectChange,
				placeholder: 'Выберите город из списка',
				list: towns
			}
		},
		{
			component: Select,
			values: {
				required: true,
				multy: true,
				name: 'status',
				label: 'Статус',
				value: provider.status.value,
				onChange: handleMultySelectChange,
				placeholder: 'Все статусы',
				list: status
			}
		},
		{
			component: Input,
			values: {
				required: false,
				name: 'email',
				label: 'E-mail',
				value: provider.email.value,
				onChange: handleInputChange,
				placeholder: 'Введите email'
			}
		},
		{
			component: Input,
			values: {
				required: true,
				name: 'name',
				label: 'Название',
				value: provider.name.value,
				onChange: handleInputChange,
				placeholder: 'Введите название поставщика услуг'
			}
		}
	]
	return (
		<div>
			{/* <Button onClick={() => console.log(111)} size={'large'} _type="primary" icon={<DownloadIcon />}>
				<Typography type="p-large">Войти</Typography>
			</Button> */}
			<Forms formConfig={formConfig} width="800px" onSubmit={handleSubmit} data={provider} />
			{/* <Input required placeholder="dasdas" value={provider.name.value} name="name" label="asdasd" onChange={handleInputChange} /> */}
			{/* <ProviderForm /> */}
			{/* <TreeSelect /> */}
		</div>
	)
}

export default Dashboard
