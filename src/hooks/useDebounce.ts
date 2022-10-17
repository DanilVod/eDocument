import { useCallback, useEffect, useRef, useState } from 'react'

export default function useDebounce(callback: (...args: any) => void, delay: number) {
	const timer = useRef(setTimeout(() => {}, 0))

	const debouncedCallback = useCallback(
		(...args: any) => {
			if (timer.current) clearTimeout(timer.current)

			timer.current = setTimeout(() => {
				callback(...args)
			}, delay)
		},
		[callback, delay]
	)

	return debouncedCallback
}
