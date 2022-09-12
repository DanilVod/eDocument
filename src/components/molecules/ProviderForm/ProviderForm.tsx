import React, { useState } from 'react'

import { Button } from '@/components/atoms'
import { Input } from '@/components/atoms/Input/Input'
import Select from '@/components/atoms/Select/Select'

import DownloadIcon from '@/assets/icons/Download.svg?component'

interface IFormItem {
	[value: string]: any
}

// interface ITree {
// 	[key: string]: any
// 	children?: ITree[]
// }

interface IProvider {
	name: IFormItem
	email: IFormItem
	town: IFormItem
	status: IFormItem
}

const Form = () => {
	const initValue = { name: { value: '' }, email: { value: '' }, town: { value: '' }, status: { value: [] } }
	const [provider, setProvider] = useState<IProvider>(initValue)

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setProvider({ ...provider, [e.target.name]: { value: e.target.value } })
	}
	const clearValue = (name: string) => {
		setProvider({ ...provider, [name]: { value: '' } })
	}

	const handleSelectChange = (value: string | string[], name: string) => {
		setProvider({ ...provider, [name]: { value: value } })
	}

	const handleMultySelectChange = (values: string | string[], name: string) => {
		setProvider({ ...provider, [name]: { value: [...values] } })
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

	return (
		<div style={{ width: 'fit-content' }}>
			Provider form
			<Select required label="Город" name="town" width="400px" onChange={handleSelectChange} list={towns} placeholder="Выберите город из списка" value={provider.town.value} />
			<Input name="name" width="400px" placeholder="Введите название поставщика услуг" label="Название" onChange={handleInputChange} value={provider.name.value} clearValue={clearValue} required />
			<Input name="email" width="400px" placeholder="Введите email" label="Email" onChange={handleInputChange} value={provider.email.value} clearValue={clearValue} />
			<Select required multy label="Статус" name="status" width="400px" onChange={handleMultySelectChange} list={status} placeholder="Все статусы" value={provider.status.value} />
			<Button _type="primary" size="small" onClick={() => console.log(provider)}>
				Отправить
			</Button>
		</div>
	)
}

export default Form
