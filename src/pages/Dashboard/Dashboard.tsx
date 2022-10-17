import React, { useCallback, useMemo, useState } from 'react'

import Forms, { formConfig } from '@/components/organisms/Forms'

import DataPicker, { DatePickerDate } from '@/components/molecules/DataPicker/DataPicker'

import Input from '@/components/atoms/Input/Input'
import Select from '@/components/atoms/Select/Select'

import DownloadIcon from '@/assets/icons/Download.svg?component'

const Dashboard = () => {
	// interface IFormItem<T> {
	// 	value: T
	// }
	// interface IProvider {
	// 	name: IFormItem<string>
	// 	email: IFormItem<string>
	// 	town: IFormItem<string>
	// 	status: IFormItem<string[]>
	// 	date: IFormItem<DatePickerDate>
	// }

	const initValue = { name: { value: '' }, email: { value: '' }, town: { value: '' }, status: { value: [] }, date: { value: { from: null, to: null } } }
	const [provider, setProvider] = useState(initValue)

	const handleSubmit = (formValues: { [key: string]: any }) => {
		console.log(formValues)
	}

	const towns = useMemo(
		() => [
			{ prefixIcon: '', text: 'Волгоград' },
			{ prefixIcon: <DownloadIcon />, text: 'Питер' },
			{ prefixIcon: <DownloadIcon />, text: 'Москва' },
			{ prefixIcon: <DownloadIcon />, text: 'Екатеринбург' },
			{ prefixIcon: <DownloadIcon />, text: 'Пермь' }
		],
		[]
	)

	const status = useMemo(
		() => [
			{ prefixIcon: '', text: 'Ознакомлен' },
			{ prefixIcon: <DownloadIcon />, text: 'Просрочено' },
			{ prefixIcon: <DownloadIcon />, text: 'Отозвано' },
			{ prefixIcon: <DownloadIcon />, text: 'Требуется оригинал' },
			{ prefixIcon: <DownloadIcon />, text: 'Требуется согласие' }
		],
		[]
	)

	const formConfig: formConfig[] = [
		{
			component: DataPicker,
			values: {
				validations: {
					required: true
				},
				multy: true,
				name: 'date',
				label: 'Период'
			}
		},
		{
			component: Select,
			values: {
				multy: false,
				name: 'town',
				label: 'Город',
				placeholder: 'Выберите город из списка',
				list: towns,
				validations: {
					required: true,
					errorMessage: 'Пожалуйста, заполните это поле'
				}
			}
		},
		{
			component: Select,
			values: {
				multy: true,
				name: 'status',
				label: 'Статус',
				placeholder: 'Все статусы',
				list: status,
				validations: {
					required: true,
					errorMessage: 'Пожалуйста, заполните это поле'
				}

			}
		},
		{
			component: Input,
			values: {
				name: 'email',
				label: 'E-mail',
				placeholder: 'Введите email',
				validations: {
					required: { value: true, errorMessage: 'Пожалуйста, заполните это поле' },
					pattern: { type: 'email', errorMessage: 'Поле заполнено некорректно' }
				}

			}
		},
		{
			component: Input,
			values: {
				name: 'name',
				label: 'Название',
				placeholder: 'Введите название поставщика услуг',
				validations: { required: { value: true } }

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
