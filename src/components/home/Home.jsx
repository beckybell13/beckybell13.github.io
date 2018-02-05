import React from 'react';
import Radium from 'radium';
import Grid from 'material-ui/Grid';

import Intro from './Intro.jsx';
import Details from './Details.jsx';
import Timeline from './Timeline.jsx';
import Contact from './Contact.jsx';

class Home extends React.Component {
	render() {
		return (
			<div>
				<Intro />
				<Details />
				<Timeline />
				<Contact />
			</div>
		);
	}
}

export default Radium(Home);
