import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { fetchCategoryPizza } from '../../redux/actions/fetchCatigoryPizza';
import { setCategoryId } from '../../redux/slices/filterSlice';

export const Categories = () => {
	const categoryId = useAppSelector(state => state.filter.categoryId);
	const dispatch = useAppDispatch();
	const categories = [
		'Все',
		'Мясные',
		'Вегетарианская',
		'Гриль',
		'Острые',
		'Закрытые'
	];

	const handleCategoryPizza = (index: number) => {
			dispatch(setCategoryId(index));
			dispatch(fetchCategoryPizza(index));
		}

	return (
		<div className='categories'>
			<ul>
				{categories.map((category, index) => (
					<li
						key={category}
						className={categoryId === index ? 'active' : ''}
						onClick={() => handleCategoryPizza(index)}
					>
						{category}
					</li>
				))}
			</ul>
		</div>
	);
};
