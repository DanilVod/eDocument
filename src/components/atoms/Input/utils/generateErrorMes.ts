import React from 'react'

import { IValidations } from '@/types/IValidations'

export default function generateErrorMes(validations?: IValidations) {
	const errorMessages = {
		required: 'Пожалуйста, заполните это поле',
		pattern: 'Поле заполнено некорректно'
	}

	if (validations) {
		if (validations.required && validations?.required.errorMessage) errorMessages.required = validations?.required.errorMessage
		if (validations.pattern && validations?.pattern.errorMessage) errorMessages.pattern = validations?.pattern.errorMessage
	}

	return errorMessages
}
