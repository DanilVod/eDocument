import React from 'react'

import { IValidations } from '@/types/IValidations'

import { patterns } from '@/validations/patterns'

const errorMessages = {
	required: 'Пожалуйста, заполните это поле',
	pattern: 'Поле заполнено некорректно'
}

export function validate(errorMessages: { required: string; pattern: string }, value: string, validations?: IValidations) {
	if (validations) {
		if (value && validations.pattern) {
			const re = new RegExp(patterns[validations.pattern.type], 'i')
			if (!re.test(value)) return errorMessages.pattern
			else return ''
		} else if (value) return ''
	}
}
