import { AppDispatch } from '../store';
import { instance } from '../../axios/axios';
import { pizzaSlice } from '../slices/piazzaSlice';
import { PizzaType } from '../../components/pizzaBlock/types';

export const fetchCategoryPizza =  (value: number) => {
	return async ( dispatch: AppDispatch) => {
		try {
			dispatch(pizzaSlice.actions.fetching)
			const {data} =  await instance.get<PizzaType[]>(`/items?category=${value}`)
			dispatch(pizzaSlice.actions.fetchCategoryPizza({ pizza: data } ));
		} catch (err) {
			dispatch(pizzaSlice.actions.fetchError(err as Error))		}
	}
};

