import React from 'react'

import ContactsIcon from '@/assets/contacts.svg?component'
import DashboardIcon from '@/assets/dashboard.svg?component'

import Tasks from './pages/Tasks/Tasks'

const Error = React.lazy(() => import('@/pages/Error/Error'))
const Contacts = React.lazy(() => import('@/pages/Contacts/Contacts'))
const Dashboard = React.lazy(() => import('@/pages/Dashboard/Dashboard'))

export interface Iroutes {
	name: string
	path: string
	page: JSX.Element
	isHidden?: boolean

	routes?: Iroutes[]
	icon?: JSX.Element
}
export const ROUTES: Iroutes[] = [
	{
		name: 'Dashboard',
		path: '/',
		page: <Dashboard />,
		icon: <DashboardIcon />
	},
	{
		name: 'Contacts',
		path: '/contacts',
		page: <Contacts />,
		icon: <ContactsIcon />
	},
	{
		name: 'Tasks',
		path: '/task',
		page: <Tasks />,
		icon: <ContactsIcon />
	},
	{
		name: 'Error',
		path: '/*',
		page: <Error />,
		isHidden: true
	}
]
