export type typePattern = typeof patterns

export const patterns = {
	name: `^[a-z ,.'-]+$`,
	email: `^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$`
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
