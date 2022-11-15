import './scss/app.scss';
import { Header } from './components/header/Header';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import {Routes, Route} from 'react-router-dom'
import { Cart } from './pages/Cart';

//https://637364870bb6b698b60aad81.mockapi.io/items

export const App = () => {
	return (
		<div className='wrapper'>
			<Header />
			<div className='content'>
				<div className='container'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/cart' element={<Cart />} />
						<Route path='*' element={<NotFound/>} />
					</Routes>
				</div>
			</div>
		</div>
	);
};
