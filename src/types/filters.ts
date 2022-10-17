import { checkboxType } from '@/components/molecules/StatusFilter/StatusFilter'

export interface IStatusFilter {
	statusNames: string[]
	onChange: (checkboxConfig: checkboxType[]) => void
}

export type allFilterProps = IStatusFilter
