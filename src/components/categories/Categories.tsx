import { useState } from 'react';

export const Categories = () => {
	const [activeCategory, setActiveCategory] = useState(0);

	const categories = [
		'Все',
		'Мясные',
		'Вегетарианская',
		'Гриль',
		'Острые',
		'Закрытые'
	];

	return (
		<div className='categories'>
			<ul>
				{categories.map((category, index) => (
					<li
						key={category}
						className={activeCategory === index ? 'active' : ''}
						onClick={() => setActiveCategory(index)}
					>
						{category}
					</li>
				))}
			</ul>
		</div>
	);
};