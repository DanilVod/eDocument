import { PropsWithChildren, ReactNode, useRef, useState } from 'react'

import { useOnClickOutside } from '@/hooks/useOnClickOutside'

import ArrowDown from '@/assets/arrowDown.svg?component'

import { Control, IconWrapper, Menu, MenuContainer, Root } from './Dropdown.style'

type Props<TItem> = {
	label: ReactNode
	onChange?(item: TItem): void
}

export const Dropdown = <T,>(props: PropsWithChildren<Props<T>>) => {
	const { label, children } = props
	const ref = useRef(null)
	const [isOpen, setOpen] = useState(false)

	const handleOpen = () => setOpen(!isOpen)
	useOnClickOutside(ref, () => setOpen(false))

	return (
		<Root ref={ref}>
			<MenuContainer onClick={handleOpen}>
				<Control type="button">{label}</Control>
				<IconWrapper isOpen={isOpen}>
					<ArrowDown width="30px" height="30px" />
				</IconWrapper>
			</MenuContainer>
			{isOpen && <Menu>{children}</Menu>}
		</Root>
	)
}
