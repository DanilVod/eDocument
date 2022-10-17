import { typePattern } from '@/validations/patterns'

export interface IValidations {
	required?: { value: boolean; errorMessage?: string }
	pattern?: { type: typePattern; errorMessage?: string }
}
