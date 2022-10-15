import { IValidations } from './IValidations'

export interface IInput {
	name: string
	label: string
	placeholder: string
	validations?: IValidations
	type?: string
}
