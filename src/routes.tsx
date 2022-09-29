import React from 'react'

import ContactsIcon from '@/assets/contacts.svg?component'
import DashboardIcon from '@/assets/dashboard.svg?component'

import { IrouteCategory, Iroutes } from './types/Iroutes'

const Error = React.lazy(() => import('@/pages/Error/Error'))
const Dashboard = React.lazy(() => import('@/pages/Dashboard/Dashboard'))
// 'user' , 'adminHR' , 'localHR' , 'HRBP' , 'manager'
export const ROUTES: IrouteCategory[] = [
	{
		name: 'common',
		routes: [
			{
				name: 'Error',
				path: '/*',
				element: <Error />,
				isHidden: true,
				roles: ['user', 'adminHR', 'localHR', 'HRBP', 'manager']
			},
			{
				name: 'Новые задачи',
				path: '/q',
				element: <Dashboard />,
				icon: <DashboardIcon />,
				roles: ['user', 'adminHR', 'localHR', 'HRBP', 'manager']
			}
		],
		title: '',
		roles: ['user', 'adminHR', 'localHR', 'HRBP', 'manager']
	},
	{
		name: 'problemStatement',
		routes: [
			{
				name: 'Пункт 1',
				path: '/problemStatement/w',
				element: <Dashboard />,
				icon: <DashboardIcon />,
				roles: ['user', 'adminHR', 'localHR', 'HRBP', 'manager'],
				routes: [
					{
						name: 'Пункт 3',
						path: '/problemStatement/w/ww',
						element: <Dashboard />,
						icon: <DashboardIcon />,
						roles: ['user', 'adminHR', 'localHR', 'HRBP', 'manager']
					},
					{
						name: 'Пункт 4',
						path: '/problemStatement/w/we',
						element: <Dashboard />,
						icon: <DashboardIcon />,
						roles: ['user', 'adminHR', 'localHR', 'HRBP', 'manager']
					}
				]
			},
			{
				name: 'Пункт 2',
				path: '/problemStatement/e',
				element: <Dashboard />,
				icon: <DashboardIcon />,
				roles: ['user', 'adminHR', 'localHR', 'HRBP', 'manager']
			},
			{
				name: 'Пункт 3',
				path: '/problemStatement/r',
				element: <Dashboard />,
				icon: <DashboardIcon />,
				roles: ['adminHR', 'localHR', 'HRBP', 'manager']
			}
		],
		title: 'Постановка задачи',
		roles: ['adminHR', 'user']
	}
]
