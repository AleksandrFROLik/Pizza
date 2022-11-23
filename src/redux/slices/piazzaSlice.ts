import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PizzaType } from '../../components/pizzaBlock/types';

type PizzaPayload = {
	pizza: PizzaType[];
};

interface PizzaState {
	isLoading: boolean;
	pizzas: PizzaType[];
	error: string;
}

const initialState: PizzaState = {
	isLoading: true,
	pizzas: [],
	error: ''
};

export const pizzaSlice = createSlice({
	name: 'pizza',
	initialState,
	reducers: {
		fetching(state) {
			state.isLoading = true;
		},
		fetchPizzaAll(state, action: PayloadAction<PizzaPayload>) {
			state.pizzas = action.payload.pizza;
			state.isLoading = false;
			state.error = '';
		},
		fetchCategoryPizza(state, action:PayloadAction<PizzaPayload>) {
			state.pizzas = action.payload.pizza;
			state.isLoading = false;
			state.error = '';
		},
		fetchError(state, action: PayloadAction<Error>) {
			state.isLoading = false;
			state.error = action.payload.message;
		}
	}
});

//export const {} = pizzaSlice.actions;
// Other code such as selectors can use the imported `RootState` type
//export const selectCount = (state: RootState) => state.counter.value

export const pizzaReducer = pizzaSlice.reducer;
