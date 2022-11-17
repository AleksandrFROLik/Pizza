import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PizzaType } from '../../components/pizzaBlock/types';

type PizzaPayload = {
	pizza: PizzaType[];
};

interface PizzaState {
	isLoading: boolean;
	pizza: PizzaType[];
	error: string;
}

const initialState: PizzaState = {
	isLoading: true,
	pizza: [],
	error: '',
};

export const pizzaSlice = createSlice({
	name: 'pizza',
	initialState,
	reducers: {
		fetching(state) {
			state.isLoading = true;
		},
		fetchPizzaGet(state, action: PayloadAction<PizzaPayload>) {
			state.pizza = action.payload.pizza
			state.isLoading = false
			state.error = ''
		},
		fetchError(state, action:PayloadAction<Error>) {
			state.isLoading = false
			state.error = action.payload.message
		}
	}
});

//export const {} = pizzaSlice.actions;
// Other code such as selectors can use the imported `RootState` type
//export const selectCount = (state: RootState) => state.counter.value

export const pizzaReducer = pizzaSlice.reducer;
