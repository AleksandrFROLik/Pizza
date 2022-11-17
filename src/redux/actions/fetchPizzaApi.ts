import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch } from '../store';
import { instance } from '../../axios/axios';
import { pizzaSlice } from '../slices/piazzaSlice';
import { PizzaType } from '../../components/pizzaBlock/types';

export const fetchPizzaApi =  () => {
	return async ( dispatch: AppDispatch) => {
		try {
			dispatch(pizzaSlice.actions.fetching)
			const {data} =  await instance.get<PizzaType[]>('/items')
			dispatch(pizzaSlice.actions.fetchPizzaGet({ pizza: data } ));
		} catch (err) {
			dispatch(pizzaSlice.actions.fetchError(err as Error))		}
	}
};

