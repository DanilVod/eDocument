import React from 'react'

import { IValidations } from '@/types/IValidations'

export default function validate(values: string[], value: string, isActive: boolean, multy?: boolean, required?: boolean, mes?: string) {
	let err = ''

	if (values.length) console.log(values)
	if (((!multy && !value) || (multy && !values.length)) && required && !isActive) {
		if (mes) err = mes
	} else {
		err = ''
	}

	return err
}
