import React, { useState } from 'react';
import { Categories } from '../components/categories/Categories';
import { Sort } from '../components/sort/Sort';
import { SkeletonPizza } from '../components/pizzaBlock/SkeletonPizza';
import pizzas from '../assets/pizzas.json';
import { PizzaType } from '../components/pizzaBlock/types';
import { PizzaBlock } from '../components/pizzaBlock/PizzaBlock';

export const Home = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const defaultPizzas = [...new Array(8)];
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

