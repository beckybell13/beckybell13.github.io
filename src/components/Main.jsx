import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import Home from './home/Home.jsx';
import Thesis from './thesis/Thesis.jsx';
import Portfolio from './portfolio/Portfolio.jsx';

const Main = () => {
	return (
		<div className='container'>
			<Switch>
				<Route exact path='/' component={Home}/>
				<Route exact path='/thesis' component={Thesis}/>
				<Route exact path='/portfolio' component={Portfolio}/>
			</Switch>
		</div>
	);
}

export default withRouter(Main);
