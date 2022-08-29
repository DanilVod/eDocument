import React from 'react'

import ContactsIcon from '@/assets/contacts.svg?component'
import DashboardIcon from '@/assets/dashboard.svg?component'

import { Iroutes } from './types/Iroutes'

const Error = React.lazy(() => import('@/pages/Error/Error'))
const Dashboard = React.lazy(() => import('@/pages/Dashboard/Dashboard'))

export const ROUTES: Iroutes[] = [
	{
		name: 'Dashboard',
		path: '/',
		element: <Dashboard />,
		icon: <DashboardIcon />
	},
	{
		name: 'Error',
		path: '/*',
		element: <Error />,
		isHidden: true
	}
]
