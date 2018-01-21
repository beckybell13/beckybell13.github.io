/*
.caption span.border {
  background-color: #111;
  color: #fff;
  padding: 18px;
  font-size: 25px;
  letter-spacing: 10px;
}
*/

import React from 'react';
import Radium from 'radium';
import Grid from 'material-ui/Grid';
import Intro from './Intro.jsx';
import MoreDetails from './MoreDetails.jsx';
import CallToAction from './CallToAction.jsx';
import Timeline2 from './Timeline2.jsx';

class Home extends React.Component {
	render() {
		return (
			<div>
				<Intro />
				<MoreDetails />
				<Timeline2 />
				<CallToAction />
			</div>
		);
	}
}

export default Radium(Home);
