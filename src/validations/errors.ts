// export const errors = {
// 	name: ['Пожалуйста, заполните это поле', 'Поле заполнено некорректно'],
// 	email: ['Пожалуйста, заполните это поле', 'Поле заполнено некорректно'],
// 	town: ['Пожалуйста, выберите значение из списка', '']
// }

export type typeError = typeof errors
export const errors = {
	name: { isNotField: 'Пожалуйста, заполните это поле', isNotValid: 'Поле заполнено некорректно' },
	email: { isNotField: 'Пожалуйста, заполните это поле', isNotValid: 'Поле заполнено некорректно' },
	town: { isNotField: 'Пожалуйста, выберите значение из списка', isNotValid: '' },
	status: { isNotField: 'Пожалуйста, выберите значение из списка', isNotValid: '' }
}
