import { configureStore } from '@reduxjs/toolkit';
import { pizzaReducer } from './slices/piazzaSlice';
import { filterReducer } from './slices/filterSlice';

export const store = configureStore({
	reducer: {
		pizza: pizzaReducer,
		filter: filterReducer,
	}
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
