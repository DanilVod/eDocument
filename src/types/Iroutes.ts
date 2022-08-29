export interface Iroutes {
	name: string
	path: string
	element: JSX.Element
	isHidden?: boolean

	routes?: Iroutes[]
	icon?: JSX.Element
}

export interface NavigatorProps {
	routes: Iroutes[]
}
