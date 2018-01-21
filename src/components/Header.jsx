import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Radium from 'radium';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';

class Header extends React.Component {
	getStyles(textColor) {
		return {
			headerBar: {
				height: '15vh',
			},
			col1: {
				margin: '0% 0% 0% 8%',
			},
			col2: {
				margin: '0% 0% 0% 0%',
				'@media screen and (max-width: 820px)': {
		      display: 'none',
		    },
			},
			links: {
				borderBottom: '1px solid ' + textColor,
				fontSize: '32px',
				fontFamily: 'Source Sans Pro, sans-serif',
				color: textColor,
				margin: '0% 2% 0% 2%',
			},
			boldLinks: {
				borderBottom: '1px solid ' + textColor,
				fontSize: '32px',
				fontFamily: 'Source Sans Pro, sans-serif',
				color: textColor,
				fontWeight: 'bold',
				margin: '0% 2% 0% 2%',
			},
			buttons: {
				display: 'inline',
				':hover': {
					fontWeight: 'bold',
		    },
			},
			logo: {
				height: '60px',
				width: '60px',
				':hover': {
					height: '64px',
					width: '64px',
					margin: '0px 0px -2px -2px',
		    },
			},
			test: {
				padding: '0.5%',
			}
		}
	}

	updateHeader(item) {
		$(`.menu`).css('pointer-events', 'auto');
		$('.menu').css('font-weight', 'normal');
		if (item !== 'home') {
			$(`#${item}`).css('pointer-events', 'none');
			$(`#${item}`).css('font-weight', 'bold');
		}
	}

	componentDidMount() {
		this.updateHeader(this.props.active);
	}

	render() {
		const { textColor, active } = this.props;
		const styles = this.getStyles(textColor);
		return (
			<div>
				<Grid container style={styles.headerBar} justify='flex-start' alignItems='center' spacing={0}>
					<Grid item sm={5} md={7} lg={8}>
						<div style={styles.col1}>
							<div style={styles.buttons} key='home' id='home' className='menu'>
								<Link className='button' to='/' style={styles.links}>HOME</Link>
							</div>
							<div style={styles.buttons} key='thesis' id='thesis' className='menu'>
								<Link className='button' to='/thesis' style={styles.links}>THESIS</Link>
							</div>
							<div style={styles.buttons} key='portfolio' id='portfolio' className='menu'>
								<Link className='button' to='/portfolio' style={styles.links}>PORTFOLIO</Link>
							</div>
						</div>
					</Grid>
					<Grid item md={4}>
						<Grid container justify='center' alignItems='center'>
							<Grid item md={2} style={styles.test}>
								<a href='mailto:bellr@mit.edu' style={styles.col2}>
									<img src={`src/img/contact/email-${textColor}-64.png`} key='email' style={styles.logo}></img>
								</a>
							</Grid>
							<Grid item md={2} style={styles.test}>
								<a href='https://www.linkedin.com/in/becky-bell-20201/' target="_blank" style={styles.col2}>
									<img src={`src/img/contact/in-cool-${textColor}-64.png`} key='linked' style={styles.logo}></img>
								</a>
							</Grid>
							<Grid item md={2} style={styles.test}>
								<a href='https://angel.co/beckybell13' target="_blank" style={styles.col2}>
									<img src={`src/img/contact/angel-list-${textColor}-64.png`} key='angel' style={styles.logo}></img>
								</a>
							</Grid>
							<Grid item md={2} style={styles.test}>
								<a href='https://github.com/beckybell13' target="_blank" style={styles.col2}>
									<img src={`src/img/contact/github-${textColor}-64.png`} key='github' style={styles.logo}></img>
								</a>
							</Grid>
					</Grid>
				</Grid>
			</Grid>
			</div>
		);
	}
}

Header.propTypes = {
	textColor: PropTypes.string.isRequired,
	active: PropTypes.string.isRequired,
};

export default Radium(Header);
