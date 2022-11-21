import React, { useEffect, useLayoutEffect } from 'react';
import { Categories } from '../components/categories/Categories';
import { Sort } from '../components/sort/Sort';
import { SkeletonPizza } from '../components/pizzaBlock/SkeletonPizza';

import { PizzaType } from '../components/pizzaBlock/types';
import { PizzaBlock } from '../components/pizzaBlock/PizzaBlock';
import { useAppSelector, useAppDispatch } from '../hooks/reduxHooks';
import { fetchPizza } from '../redux/actions/fetchPizza';

export const Home = () => {

	const isLoading = useAppSelector(state => state.pizza.isLoading)
	const error = useAppSelector(state => state.pizza.error)
	const defaultPizzas = [...new Array(8)];
	const dispatch = useAppDispatch();
	const pizzas = useAppSelector(state => state.pizza.pizza)

	useEffect(() => {
		dispatch(fetchPizza());
		window.scrollTo(0, 0);
	}, []);

	console.log(pizzas);
	return (
		<>
			<div className='content__top'>
				<Categories />
				<Sort />
			</div>
			{ error && <h2 className='content__title'>{error}</h2> }
			{ !error &&	<h2 className='content__title'>Все пиццы</h2> }
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
