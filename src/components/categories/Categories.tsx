import {useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { fetchCategoryPizza} from '../../redux/actions/fetchCatigoryPizza';



export const Categories = () => {
	const [activeCategory, setActiveCategory] = useState(0);

	const dispatch = useAppDispatch();
	const categories = [
		'Все',
		'Мясные',
		'Вегетарианская',
		'Гриль',
		'Острые',
		'Закрытые'
	];

	const handleCategoryPizza = useMemo(()=> ( index: number ) => {
		setActiveCategory(index);
		dispatch(fetchCategoryPizza(index));
	},[activeCategory]);

	return (
		<div className='categories'>
			<ul>
				{categories.map((category, index) => (
					<li
						key={category}
						className={activeCategory === index ? 'active' : ''}
						onClick={() => handleCategoryPizza(index)}
					>
						{category}
					</li>
				))}
			</ul>
		</div>
	);
};
