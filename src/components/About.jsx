import React from 'react';
import Radium from 'radium';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';

import Header from './Header.jsx';

class Experience extends React.Component {
	getStyles() {
		return {
			bannerContainer: {

			},
			banner: {
				background: 'url(./src/img/news.jpg) no-repeat center center/cover',
				height: '35vh',
				width: '90%',
				textAlign: 'center',
				color: 'white',
				fontSize: '40px',
				fontFamily: 'Source Sans Pro, sans-serif',
			},
			bannerText: {
				width: '100%',
				backgroundColor: 'rgba(0,0,0,0.6)',
			},
			intro: {
				height: '35vh',
			},
			descriptionTitle: {
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				textAlign: 'left',
				padding: '0% 3% 0% 10%',
				fontSize: '30px',
				fontWeight: 'bold',
				fontFamily: 'Source Sans Pro, sans-serif',
			},
			introTextRight: {
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				textAlign: 'left',
				padding: '0% 10% 0% 3%',
				fontFamily: 'Source Sans Pro, sans-serif',
				fontSize: '20px',
				color: 'gray',
			},
			detailContainer: {
				height: '80vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			},
			buttonContainer: {
				color: 'white',
			},
			button1: {
				backgroundColor: '#86a1a5',
				margin: '0% 1% 0% 0%',
			},
			button2: {
				backgroundColor: '#8F4038',
				margin: '0% 0% 0% 1%',
			},
			pic: {
				width: '100%',
				maxWidth: '100%',
				boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
			},
			icon: {
				marginRight: '5%',
			}
		}
	}

	render() {
		const styles = this.getStyles();
		return (
			<div style={{padding: '1%'}}>
				<Header textColor={'black'} active={'thesis'}/>
				<Grid container justify='center' alignItems='center' spacing={0} style={styles.bannerContainer}>
					<Grid container style={styles.banner} spacing={0} alignItems='center' justify='center'>
						<Grid item xs={12}>
							<Grid container spacing={0} justify='center' alignItems='center' style={{height:'35vh'}}>
								<div style={styles.bannerText}>
									<p> increasing accessibility of machine learning methods <br></br> for media researchers </p>
								</div>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				<Grid container style={styles.intro} spacing={0}>
					<Grid item xs={6} style={styles.descriptionTitle}>
						<img style={styles.icon} src='./src/img/group-48.png'></img>
						<p> The news steers the conversations we have as a society </p>
					</Grid>
					<Grid item xs={6} style={styles.introTextRight}>
						<p> {"How does the news shape our view of issues and events?\
								Which topics of the day are published and shared the most?\
								Which events get coverage and which events are ignored?\
								These are the kinds of questions that media researchers are interested\
								in exploring. From "}
								<a className='link' href='https://mediacloud.org/news/2016/6/9/understanding-teen-pregnancy-frames-using-media-cloud-tools'>teen pregnancy</a>
								{" to "}<a className='link' href='https://mediacloud.org/election-2016'>the election</a>{",\
								the attention and framing of issues can affect how we talk about and understand events in our world."}
						</p>
					</Grid>
				</Grid>
				<Grid container style={styles.intro} spacing={0}>
					<Grid item xs={6} style={styles.descriptionTitle}>
						<img style={styles.icon} src='./src/img/computer-48.png'></img>
						<p> Media Cloud helps researchers understand the coverage and framing of topics in the news </p>
					</Grid>
					<Grid item xs={6} style={styles.introTextRight}>
						<p> <a className='link' href='https://mediacloud.org'>Media Cloud</a>{" is an online research platform where users can use a\
								suite of tools to analyze news data. It collects and stores data on news stories from top sources and\
								provides visualization and analysis tools to explore and understand the coverage and content of different topics.\
								It is a on-going project run out of the "}<a className='link' href='https://civic.mit.edu/'>Center for Civic Media</a>{" at the "}
								<a className='link' href='https://www.media.mit.edu/'>MIT Media Lab</a>{"."}
						</p>
					</Grid>
				</Grid>
				<Grid container style={styles.intro} spacing={0} >
					<Grid item xs={6} style={styles.descriptionTitle}>
						<img style={styles.icon} src='./src/img/data-48.png'></img>
						<p>
							Machine learning and visualization can help researchers
							make sense of the extensive amount of online news data
						</p>
					</Grid>
					<Grid item xs={6} style={styles.introTextRight}>
						<p>
							My thesis explores which machine learning methods
							are best suited for the detection of frames in news topics as well as
							how we can make these complex techniques more
							accessible to a non-technical user base.
							I am currently researching, designing, and implementing new features for
							Media Cloud, including automated news story classification
							and visualization tools for word embeddings.
						</p>
					</Grid>
				</Grid>

		</div>
		);
	}
}

export default Radium(Experience);
