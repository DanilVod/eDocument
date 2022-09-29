import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { Filters } from '@/components/organisms/Filters/Filters'

import { StatusFilter } from '@/components/molecules'

import { Avatar, Button, Placeholder, Status, Typography } from '@/components/atoms'

import { getContacts } from '@/services/contactsService'

import { allStatus } from '@/types/share'

import ContactsIcon from '@/assets/contacts.svg?component'

export const StyledStatusIcon = styled(ContactsIcon)`
	width: 15px;
	height: 15px;
	path {
		stroke: white;
	}
`
const iconsConfig: { [key in allStatus]?: JSX.Element } = {
	Sent: <StyledStatusIcon />
}
export const Contacts = () => {
	useEffect(() => {
		console.log(getContacts().then((res) => console.log(res.data[0])))
	}, [])

	const [value, setValue] = useState<string>('')
	const [filterStatus, setfilterStatus] = useState<any>([])
	const handleOnInputText = React.useCallback((e: string) => {
		setValue(e)
	}, [])
	// const handleStatus = (e) => {
	// 	console.log(e)
	// }
	// const onChange = React.useCallback((e: any) => setValue(e), [setValue]);
	console.log(filterStatus)
	return (
		<>
			<Filters filterConfig={[{ status: { statusNames: ['f'], onChange: () => {} } }]}></Filters>

			<Placeholder
				placeholderText="Jane"
				type="show"
				label="First name"
				value={value}
				onInputText={handleOnInputText}
			/>
			<Status iconsConfig={iconsConfig} type="Sent" />
			<Avatar
				image="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/404.jpg"
				isActive={false}
			/>
			<Button>
				<Typography>Btn</Typography>
			</Button>
		</>
	)
}

export default React.memo((props) => <Contacts {...props} />)
