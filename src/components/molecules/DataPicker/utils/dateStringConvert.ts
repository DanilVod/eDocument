export function dateToString(date: Date | null) {
	if (!date) return ''

	let month = `${date.getMonth() + 1}`
	if (date.getMonth() + 1 < 10) month = '0' + month
	let day = `${date.getDate()}`
	if (date.getDate() < 10) day = '0' + day

	const strDate = `${date.getFullYear()}-${month}-${day}`
	return strDate
}

export function stringToDate(string: string) {
	const dates = string.split('-').map(Number)
	const date = new Date(dates[0], dates[1] - 1, dates[2])
	if (isNaN(date.getTime())) return null
	return date
}
