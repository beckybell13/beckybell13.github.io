import React from 'react';
import Radium from 'radium';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Header from './Header.jsx';

class Intro extends React.Component {
	getStyles() {
		return {
			img: {
				height: '100vh',
				background: 'url(./src/img/pillars.jpg) no-repeat center center/cover fixed',
				padding: '1%',
			},
			button: {
				background: '#86a1a5',
				color: 'white',
			},
			banner: {
				height: '60vh',
			},
			heading: {
				fontSize: '70px',
				fontFamily: 'Vidaloka, serif',
				color: 'white',
				margin: '0%',
			},
			details: {
				fontFamily: 'Source Sans Pro, sans-serif',
				color: 'white',
				fontSize: '32px',
			}
		}
	}

	learnMoreClick() {
		$('html, body').animate({
		    scrollTop: ($('#more-details').offset().top)
		}, 500);
	}

	render() {
		const styles = this.getStyles();
		return (
			<div style={styles.img}>
				<Header textColor={'white'} active={'home'}/>
				<Grid container justify='center' align='center' style={styles.banner}>
					<Grid item xs={7}>
					</Grid>
					<Grid item xs={4}>
						<Grid container justify='flex-start' align='center'>
							<div>
								<p style={styles.heading}>Hi, I'm Becky.</p>
								<div style={styles.details}>
									<p> A new grad passionate about <br></br> tech for good. </p>
								</div>
								<Button style={styles.button} onClick={this.learnMoreClick}> Learn more </Button>
							</div>
						</Grid>
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default Radium(Intro);
