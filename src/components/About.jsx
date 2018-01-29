import React from 'react';
import Radium from 'radium';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Header from './Header.jsx';
import Spacer from './Spacer.jsx';

class Experience extends React.Component {
	getStyles() {
		return {
			bannerContainer: {

			},
			banner: {
				background: `url(${require('../../assets/img/news.jpg')}) no-repeat center center/cover`,
				height: '75vh',
				width: '100%',
				textAlign: 'center',
				color: 'white',
				fontSize: '40px',
				fontFamily: 'Source Sans Pro, sans-serif',
			},
			bannerText: {
				width: '100%',
				height: '75vh',
				backgroundColor: 'rgba(27,29,35,0.6)',
				fontWeight: 'bold',
				padding: '0% 20% 0% 20%',
			},
			pageHeading: {
				// border: 'solid 2px white',
				fontSize: '50px',
				padding: '3%',
				margin: '5% 0% 0% 0%',
			},
			intro: {
				height: '35vh',
				padding: '2% 0% 0% 0%',
				// backgroundColor: '#f7f7f7',
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
			},
			link: {
				color: '#326891',
				fontWeight: 'bold',
				textDecoration: 'none',
				':hover': {
					textDecoration: 'underline',
				},
			},
			feature: {
				padding: '0% 8% 0% 8%',
				height: '70vh',
				backgroundColor: '#f7f7f7',
			},
			featurePic: {
				boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
				maxWidth: '100%',
				width: '100%',
			},
			featureHeading: {
				fontFamily: 'Cambo, serif',
				color: 'black',
				fontSize: '30px',
				textAlign: 'left',
				margin: '0px',
				width: '100%',
			},
			featureTextCol: {
				padding: '0% 5% 0% 5%',
				fontFamily: 'Source Sans Pro, sans-serif',
				fontSize: '20px',
				color: 'gray',
			},
			featureIntro: {
				fontFamily: 'Source Sans Pro, sans-serif',
				fontSize: '40px',
				color: 'gray',
				backgroundColor: '#f7f7f7',
			},
		}
	}

	render() {
		const styles = this.getStyles();
		return (
			<div style={styles.bannerContainer}>
				<Header textColor={'white'} active={'thesis'}/>
				<Grid container justify='center' alignItems='center' spacing={0}>
				  <Grid container style={styles.banner} spacing={0} alignItems='center' justify='center'>
				    <Grid item xs={12}>
				      <Grid container spacing={0} justify='center' alignItems='center' style={styles.bannerText}>
				        <p style={styles.pageHeading}> increasing accessibility of machine learning methods for media researchers </p>
				      </Grid>
				    </Grid>
				  </Grid>
				</Grid>
				<Grid container style={styles.intro} spacing={0}>
					<Grid item xs={6} style={styles.descriptionTitle}>
						<img style={styles.icon} src={require('../../assets/img/group-48.png')}></img>
						<p> The news steers the conversations we have as a society </p>
					</Grid>
					<Grid item xs={6} style={styles.introTextRight}>
						<p> {"How does the news shape our view of issues and events?\
								Which topics of the day are published and shared the most?\
								Which events get coverage and which events are ignored?\
								These are the kinds of questions that media researchers are interested\
								in exploring. From "}
								<a style={styles.link} key='thesis-teen-link' href='https://mediacloud.org/news/2016/6/9/understanding-teen-pregnancy-frames-using-media-cloud-tools' target="_blank">teen pregnancy</a>
								{" to "}<a style={styles.link} key = 'thesis-election-link' href='https://mediacloud.org/election-2016' target="_blank">the election</a>{",\
								the attention and framing of issues can affect how we talk about and understand events in our world."}
						</p>
					</Grid>
				</Grid>
				<Grid container style={styles.intro} spacing={0}>
					<Grid item xs={6} style={styles.descriptionTitle}>
						<img style={styles.icon} src={require('../../assets/img/computer-48.png')}></img>
						<p> Media Cloud helps researchers understand the coverage and framing of topics in the news </p>
					</Grid>
					<Grid item xs={6} style={styles.introTextRight}>
						<p> <a style={styles.link} key='thesis-cloud-link' href='https://mediacloud.org' target="_blank">Media Cloud</a>{" is an online, "}
								<a style={styles.link} key='thesis-github-link' href='https://github.com/mitmedialab/MediaCloud-Web-Tools' target="_blank">open-source</a>
								{" research platform where users can use a\
								suite of tools to analyze news data. It collects and stores data on news stories from top sources and\
								provides visualization and analysis tools to explore and understand the coverage and content of different topics.\
								It is a on-going project run out of the "}<a style={styles.link} key='thesis-civic-link' href='https://civic.mit.edu/' target="_blank">Center for Civic Media</a>{" at the "}
								<a style={styles.link} key='thesis-lab-link' href='https://www.media.mit.edu/' target="_blank">MIT Media Lab</a>{"."}
						</p>
					</Grid>
				</Grid>
				<Grid container style={styles.intro} spacing={0} >
					<Grid item xs={6} style={styles.descriptionTitle}>
						<img style={styles.icon} src={require('../../assets/img/data-48.png')}></img>
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
				<Grid container justify='center' alignItems='center' spacing={0} style={styles.featureIntro}>
					<p> - F E A T U R E S - </p>
				</Grid>
				<Grid container style={styles.feature} justify='center' alignItems='center' spacing={0}>
					<Grid item xs={6} style={styles.featureCol}>
						<img style={styles.featurePic} src={require('../../assets/img/classification.png')}></img>
					</Grid>
					<Grid item xs={6} style={styles.featureTextCol}>
						<p style={styles.featureHeading}>
							Automated Story Classification
						</p>
						<div>
							<p>
								{"The ability to pinpoint and track different conversations and frames within a topic in the media \
								is of great interest to researchers. Supervised classification methods can help researchers create \
								their own machine learning models that can label a given story as part of a frame or not based on \
								training sets that the user uploads to the platform. Using these labels, researchers can use the \
								existing analysis tools on the platform to dig deeper into the specific frame."}
							</p>
						</div>
					</Grid>
				</Grid>
				<Grid container style={styles.feature} justify='center' alignItems='center' spacing={0}>
					<Grid item xs={6} style={styles.featureTextCol}>
						<p style={styles.featureHeading}>
							Visualizing Word Embeddings
						</p>
						<div>
							<p>
								{"When researchers are unsure of what the frames of a topic may be, \
									visualization tools can help them explore the possible space. \
									Word embeddings, which are numerical representations of words generated by \
									a neural net, can be used to spatially encode how often words \
									are used together in context. By examining the relationships between the most frequent words in a topic via a \
									word cloud where the position of a word is determined by a 2D representation of its embedding, \
									researchers can pinpoint potential conversations within a topic."}
							</p>
						</div>
					</Grid>
					<Grid item xs={6} style={styles.featureCol}>
						<img style={styles.featurePic} src={require('../../assets/img/w2v.png')}></img>
					</Grid>
				</Grid>
		</div>
		);
	}
}

export default Radium(Experience);
