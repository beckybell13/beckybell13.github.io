import React from 'react';
import Radium from 'radium';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';

class Contact extends React.Component {

	getStyles() {
		return {
			container: {
				height: '65vh',
			},
			heading: {
				fontFamily: 'Cambo, serif',
				fontSize: '52px',
				color: 'rgb(143, 64, 56)',
			},
			buttonContainer: {
				fontSize: '20px',
				fontFamily: 'Source Sans Pro, sans-serif',
				fontWeight: 'bold',
			},
			logo: {
				width: '60px',
				height: '60px',
				':hover': {
					width: '64px',
					height: '64px',
					margin: '0px -2px -2px 0px',
				}
			},
		}
	}

	render() {
		const styles = this.getStyles();
		return (
			<div style={{padding: '1%'}}>
				<Grid container style={styles.container} justify='center' alignItems='center' spacing={0}>
					<Grid item xs={6}>
						<Grid container justify='flex-end' alignItems='center'>
							<div>
								<p style={styles.heading}> Let's <br></br> connect. </p>
							</div>
						</Grid>
					</Grid>
					<Grid item xs={6} style={styles.buttonContainer}>
						<Grid container direction='column' justify='flex-start' alignItems='center' spacing={8}>
							<Grid item xs={12} style={{width: '100%'}}>
								<Grid container justify='flex-start' alignItems='center' direction='row'>
									<Grid item xs={2} style={{padding: '6px', textAlign: 'right'}}>
										<a href='mailto:bellr@mit.edu'>
											<img src={require('../../assets/img/contact/email-black-128.png')} key='email-bottom' style={styles.logo}></img>
										</a>
									</Grid>
									<Grid item xs={10}>
										<p> bellr@mit.edu </p>
									</Grid>
								</Grid>
							</Grid>
							<Grid item xs={12} style={{width: '100%'}}>
								<Grid container justify='flex-start' alignItems='center'>
									<Grid item xs={2} style={{padding: '6px', textAlign: 'right'}}>
										<a href='https://www.linkedin.com/in/becky-bell-20201/' target="_blank">
											<img src={require('../..//assets/img/contact/in-cool-black-128.png')} key='linked-in-bottom' style={styles.logo}></img>
										</a>
									</Grid>
									<Grid item xs={10}>
										<p> beckybell20201 </p>
									</Grid>
								</Grid>
							</Grid>
							<Grid item xs={12} style={{width: '100%'}}>
								<Grid container justify='flex-start' alignItems='center'>
									<Grid item xs={2} style={{padding: '6px', textAlign: 'right'}}>
										<a href='https://angel.co/beckybell13' target="_blank">
											<img src={require('../..//assets/img/contact/angel-list-black-128.png')} key='angel-list-bottom' style={styles.logo}></img>
										</a>
									</Grid>
									<Grid item xs={10}>
										<p> beckybell13 </p>
									</Grid>
								</Grid>
							</Grid>
							<Grid item xs={12} style={{width: '100%'}}>
								<Grid container justify='flex-start' alignItems='center'>
									<Grid item xs={2} style={{padding: '6px', textAlign: 'right'}}>
										<a href='https://github.com/beckybell13' target="_blank">
											<img src={require('../..//assets/img/contact/github-black-128.png')} key='github-bottom' style={styles.logo}></img>
										</a>
									</Grid>
									<Grid item xs={10}>
										<p> beckybell13 </p>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default Radium(Contact);
