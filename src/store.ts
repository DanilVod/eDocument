import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'

import { pageSlice } from '@/components/organisms/PageSkeleton/pageSkeletonSlice'

export const store = configureStore({
	reducer: { globalPageState: pageSlice.reducer }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>
