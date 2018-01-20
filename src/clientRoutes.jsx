import React from 'react';
import {
	BrowswerRouter as Router,
	Route
} from 'react-router-dom';

import Home from './components/Home.jsx';
import Resume from './components/Resume.jsx';
import Experience from './components/Experience.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
// TODO: put in a not found page

const routes = () => (
	<Router>
		<Route path='/' component={Home} />
		<Route path='portfolio' component={Experience} />
		<Route path='resume' component={Resume} />
	</Router>
);

export default routes;
