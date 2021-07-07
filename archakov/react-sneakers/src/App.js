import React from 'react';
import Card from './components/Card'; 
import Header from './components/Header';
import Drawer from './components/Drawer';

const App = () => {
	return (
		<div className="wrapper">
			
			<Drawer/>		 

			<Header/>

			<div className="content p-4 mb-5">
				<div className="d-flex align-items-center justify-content-between">
					<h1>Все кроссовки</h1>
					<div className="search-block">
						<img src="img/search.svg" alt="search" />
						<input placeholder="Поиск..." />
					</div>
				</div>
				<div className="sneakers d-flex">
					<Card/>
				</div>

			</div>
		</div>
	)
}

export default App;
