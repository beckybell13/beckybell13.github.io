import React from 'react';
import Main from './Main.jsx';
import Footer from './Footer.jsx'
import Grid from 'material-ui/Grid';

class AppContainer extends React.Component {
	render() {
		return (
			<div id='appContainer' className='container' style={{ flexGrow: '1' }}>
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
