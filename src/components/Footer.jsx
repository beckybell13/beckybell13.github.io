import React from 'react';
import { Link } from 'react-router-dom';
import Radium from 'radium';

class Footer extends React.Component {
	getStyles() {
		return {
			headerBar: {
				backgroundColor: '#041D2C',
				height: '100%',
				textAlign: 'center',
				width: '100%',
			},
			homeButtonText: {
				textDecoration: 'none',
				fontSize: '20px',
				fontFamily: 'Source Sans Pro, sans-serif',
				color: 'white',
				padding: '4%',
				textAlign: 'right',
			}
		}
	}

	render() {
		const styles = this.getStyles();
		return (
			<div style={styles.headerBar}>
				<div style={styles.homeButtonText}>
					&copy; Becky Bell 2018
				</div>
			</div>
		);
	}
}

export default Radium(Footer);
