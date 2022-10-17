import { createSlice } from '@reduxjs/toolkit'

// Define a type for the slice state
interface globalPageState {
	pages: any
}

// Define the initial state using that type
const initialState: globalPageState = {
	pages: {}
}

export const pageSlice = createSlice({
	name: 'pageSlice',
	// `createSlice` will infer the state type from the `initialState` argumen t
	initialState,
	reducers: {
		setPageState: (state, action) => {
			state.pages = { ...state.pages, [action.payload.name]: action.payload }
		}

		// Use the PayloadAction type to declare the contents of `action.payload`
		// incrementByAmount: (state, action: PayloadAction<number>) => {
		// 	state.value += action.payload
		// }
	}
})

export const { setPageState } = pageSlice.actions

export default pageSlice.reducer
