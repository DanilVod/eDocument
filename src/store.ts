import counterSlice from "./features/counter/counterSlice";
import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
export const store = configureStore({
  reducer: { counter: counterSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
