import { menuCategory, roles } from './share'

export interface IrouteCategory {
	name: string
	routes: Iroutes[]
	title: string
	roles: roles[]
}

export interface Iroutes {
	name: string
	path: string
	element: JSX.Element
	isHidden?: boolean
	roles: roles[]
	routes?: Iroutes[]
	icon?: JSX.Element
}

export interface NavigatorProps {
	routes: IrouteCategory[]
}
