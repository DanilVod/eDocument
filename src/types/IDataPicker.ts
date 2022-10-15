import { IValidations } from './IValidations'

export interface IDataPicker {
	multy: boolean
	name: string
	label: string
	validations?: { required: boolean }
}
