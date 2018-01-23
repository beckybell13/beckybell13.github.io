import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Home from './Home.jsx';
import About from './About.jsx';
import Resume from './Resume.jsx';

const Main = ({ location }) => {
	const currentKey = location.pathname.split('/')[1] || '/';
  const timeout = { enter: 300, exit: 200 };

	return (
		<div className='container'>
			<Switch key={location.key} location={location}>
				<Route exact path='/' component={Home}/>
				<Route exact path='/thesis' component={About}/>
				<Route exact path='/portfolio' component={Resume}/>
			</Switch>
		</div>
	);
}

export default withRouter(Main);

// <div className='container'>
// 	<TransitionGroup component="main" className="page-main">
// 		<CSSTransition key={currentKey} timeout={timeout} classNames="fade" appear>
// 			<Switch key={location.key} location={location}>
// 				<Route exact path='/' component={Home}/>
// 				<Route exact path='/thesis' component={About}/>
// 				<Route exact path='/portfolio' component={Resume}/>
// 			</Switch>
// 		</CSSTransition>
// 	</TransitionGroup>
// </div>
