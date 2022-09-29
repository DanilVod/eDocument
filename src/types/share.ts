export type InputTypes = 'show' | 'new' | 'default'

type emailStatus = 'Scheduled' | 'Sent' | 'Archived' | 'Draft'

type taskStatus = 'Completed' | 'Ended' | 'Active'

type contactStatus = 'New' | 'Top rated' | 'Fired'

type dealStatus = 'Low' | 'High' | 'Urgent'

export type roles = 'user' | 'adminHR' | 'localHR' | 'HRBP' | 'manager'
export type menuCategory = 'problemStatement' | 'taskControl' | 'myDocuments' | 'other' | 'common'

export type allStatus = emailStatus | taskStatus | contactStatus | dealStatus
