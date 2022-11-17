import React, { useEffect, useState } from 'react';
import { Categories } from '../components/categories/Categories';
import { Sort } from '../components/sort/Sort';
import { SkeletonPizza } from '../components/pizzaBlock/SkeletonPizza';

import { PizzaType } from '../components/pizzaBlock/types';
import { PizzaBlock } from '../components/pizzaBlock/PizzaBlock';
import { useAppSelector, useAppDispatch } from '../hooks/reduxHooks';
import { fetchPizzaApi } from '../redux/actions/fetchPizzaApi';

export const Home = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const defaultPizzas = [...new Array(8)];
	const dispatch = useAppDispatch();
	const pizzas = useAppSelector(state => state.pizza.pizza)

	useEffect(() => {
		dispatch(fetchPizzaApi());
		window.scrollTo(0, 0);
	}, []);


	return (
		<>
			<div className='content__top'>
				<Categories />
				<Sort />
			</div>
			<h2 className='content__title'>Все пиццы</h2>
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
