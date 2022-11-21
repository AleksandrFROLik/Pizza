import { AppDispatch } from '../store';
import { instance } from '../../axios/axios';
import { pizzaSlice } from '../slices/piazzaSlice';
import { PizzaType } from '../../components/pizzaBlock/types';

export const fetchPizza = () => {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(pizzaSlice.actions.fetching);
			const { data } = await instance.get<PizzaType[]>('/items');
			dispatch(pizzaSlice.actions.fetchPizzaAll({ pizza: data }));
		} catch (err) {
			dispatch(pizzaSlice.actions.fetchError(err as Error));
		}
	};
};
