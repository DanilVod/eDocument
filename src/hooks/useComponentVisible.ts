import { useEffect, useRef, useState } from 'react'

export default function useComponentVisible(initialIsVisible: boolean) {
	const [isActive, setIsActive] = useState(initialIsVisible)
	const ref = useRef<HTMLDivElement>(null)

	const handleHideDropdown = (event: KeyboardEvent) => {
		if (event.key === 'Escape') {
			setIsActive(false)
		}
	}

	const handleClickOutside = (event: Event) => {
		if (ref.current && !ref.current.contains(event.target as Node)) {
			setIsActive(false)
		}
	}

	useEffect(() => {
		document.addEventListener('keydown', handleHideDropdown, true)
		document.addEventListener('click', handleClickOutside, true)
		return () => {
			document.removeEventListener('keydown', handleHideDropdown, true)
			document.removeEventListener('click', handleClickOutside, true)
		}
	})

	return { ref, isActive, setIsActive }
}
