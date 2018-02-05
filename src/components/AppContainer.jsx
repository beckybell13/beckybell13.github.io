import React from 'react';
import Grid from 'material-ui/Grid';

import Main from './Main.jsx';
import Footer from './Footer.jsx'

class AppContainer extends React.Component {
	render() {
		return (
			<div id='appContainer' className='container'>
				<Grid container spacing={0}>
					<Grid item xs={12}>
						<Main />
					</Grid>
					<Grid item xs={12}>
						<Footer />
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default AppContainer;
