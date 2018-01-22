import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router-dom';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';

class MoreDetails extends React.Component {
	getStyles() {
		return {
			img: {
				height: '80vh',
			},
			contentCol: {
				/* formatting */
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				padding: '0% 15% 0% 0%',
				/* text */
				textAlign: 'justify',
				fontSize: '20px',
				fontFamily: 'Source Sans Pro, sans-serif',
			},
			headshotCol: {
				/* formatting */
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				padding: '0% 0% 0% 10%',
			},
			headshot: {
				borderRadius: '100%',
				maxWidth: '100%',
				width: '100%',
			},
			headingCol: {
				/* formatting */
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				/* text */
				fontSize: '52px',
				fontFamily: 'Cambo, serif',
				textAlign: 'left',
				color: '#8F4038',
			},
			downloadButton: {
				background: '#86a1a5',
				color: 'white',
				marginLeft: '1%',
			},
			portfolioButton: {
				background: '#8F4038',
				color: 'white',
				marginRight: '1%',
			},
		}
	}

	render() {
		const styles = this.getStyles();
		return (
			<div style={{padding: '1%'}} id='more-details'>
				<Grid container style={styles.img} spacing={0}>
					<Grid item xs={4} sm={4} md={4} lg={4} style={styles.headshotCol}>
						<img src={require('../../assets/img/index-background-sq.jpg')} style={styles.headshot}></img>
					</Grid>
					<Grid item xs={3} sm={3} md={3} lg={3} style={styles.headingCol}>
						<div>
							Developer,<br></br>
							Researcher,<br></br>
							Organizer,<br></br>
							Teacher<br></br>
						</div>
					</Grid>
					<Grid item xs={5} sm={5} md={5} lg={5} style={styles.contentCol}>
						<div>
							<p>
								I'm a recent MIT computer science graduate who is excited about
								using technology to build tools that empower people and organizations,
								especially in the public sector.
								I'm also interested in making tech more accessible through
								education and intuitive UI design.
							<br></br><br></br>
								I finished undergrad in Spring 2017 and am currently pursuing a
								fifth-year Masters of Engineering in computer science with the
								Center for Civic Media at the MIT Media Lab.
							</p>
							<Link className='button' to='/portfolio' style={{textDecoration: 'none'}}>
								<Button style={styles.portfolioButton}> See Portfolio </Button>
							</Link>
							<Link className='button' to='/thesis' style={{textDecoration: 'none'}}>
								<Button style={styles.downloadButton}> Learn About Thesis </Button>
							</Link>
						</div>
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default Radium(MoreDetails);
