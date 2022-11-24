import React, { useEffect } from 'react';
import { Categories } from '../components/categories/Categories';
import { Sort } from '../components/sort/Sort';
import { SkeletonPizza } from '../components/pizzaBlock/SkeletonPizza';

import { PizzaType } from '../components/pizzaBlock/types';
import { PizzaBlock } from '../components/pizzaBlock/PizzaBlock';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { fetchPizza } from '../redux/actions/fetchPizza';

export const Home = () => {
	const { isLoading, pizzas, error } = useAppSelector(state => state.pizza);
	const { sort, categoryId, searchValue } = useAppSelector(
		state => state.filter
	);
	const defaultPizzas = [...new Array(8)];
	const dispatch = useAppDispatch();

	const sortBy = sort.sortProperty.replace('-', '');
	const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
	const category = categoryId > 0 ? String(categoryId) : '';
	const search = searchValue;

	useEffect(() => {
		dispatch(fetchPizza());
		window.scrollTo(0, 0);
	}, [dispatch]);

	return (
		<>
			<div className='content__top'>
				<Categories />
				<Sort />
			</div>
			{error && <h2 className='content__title'>{error}</h2>}
			{!error && <h2 className='content__title'>Все пиццы</h2>}
			<div className='content__items'>
				{isLoading &&
					defaultPizzas.map((_, index) => <SkeletonPizza key={index} />)}
				{!isLoading &&
					pizzas.map((pizza: PizzaType) => (
						<PizzaBlock key={pizza.id} pizza={pizza} />
					))}
			</div>
		</>
	);
};
