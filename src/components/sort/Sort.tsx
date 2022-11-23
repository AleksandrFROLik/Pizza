import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { setSort } from '../../redux/slices/filterSlice';

type ListSort = {
	name: string;
	sortProperty: string;
};

export const Sort = () => {
	const [toggleSortPopup, setToggleSortPopup] = useState(false);
	const listSorts = [
		{ name: 'популярности', sortProperty: 'rating' },
		{ name: 'цене', sortProperty: 'price' },
		{ name: 'алфавиту', sortProperty: 'title' }
	];


	const dispatch = useAppDispatch();
	const sort = useAppSelector(state => state.filter.sort);

	const handleSelected = (listSort: ListSort) => {
		dispatch(setSort(listSort));
		setToggleSortPopup(false);
	};

	return (
		<div className='sort'>
			<div className='sort__label'>
				<svg
					width='10'
					height='6'
					viewBox='0 0 10 6'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z'
						fill='#2C2C2C'
					/>
				</svg>
				<b>Сортировка по:</b>
				<span onClick={() => setToggleSortPopup(!toggleSortPopup)}>{sort.name}</span>
			</div>
			{toggleSortPopup && (
				<div className='sort__popup'>
					<ul>
						{listSorts.map((listSort, index) => (
							<li
								key={index}
								className={sort.sortProperty === listSort.sortProperty ? 'active' : ''}
								onClick={() => handleSelected(listSort)}
							>
								{listSort.name}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};
