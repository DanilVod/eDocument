export type typePattern = typeof patterns

export const patterns = {
	name: `^[a-z ,.'-]+$`,
	email: `^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$`
	// dateFrom: `([1-2][0-9]{3})[-](0[1-9]|1[012])[-](0[1-9]|[12][0-9]|3[01])`,
	// dateTo: `([1-2][0-9]{3})[-](0[1-9]|1[012])[-](0[1-9]|[12][0-9]|3[01])`
}

// export const patterns = (name) => {
//   switch (name) {
//     case 'name':

//       break;

//     default:
//       break;
//   }
// 	name: `/^[a-z ,.'-]+$/i`,
// 	email: `/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i`
// }
