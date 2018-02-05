import React from 'react';
import Radium from 'radium';
import Grid from 'material-ui/Grid';
import Chip from 'material-ui/Chip';
import Button from 'material-ui/Button';

import Header from '../Header.jsx';
import Spacer from '../util/Spacer.jsx';

class Portfolio extends React.Component {
	getStyles() {
		return {
			portfolioItem: {
				/* format styling */
				height: '70vh',
				maxHeight: '70vh',
				minHeight: '40vh',
				/* text styling */
				fontFamily: 'Source Sans Pro, sans-serif',
				fontSize: '18px',
				color: 'gray',
			},
			textContainer: {
				padding: '0% 5% 0% 5%',
			},
			title: {
				fontFamily: 'Cambo, serif',
				color: 'black',
				fontSize: '30px',
				textAlign: 'left',
				margin: '0px',
				width: '100%',
			},
			subtitle: {
				margin: '0%',
				fontStyle: 'italic',
			},
			chipContainer: {
				display: 'flex',
				margin: '0px',
				padding: '0px',
				width: '100%',
			},
			chip: {
				margin: '0% 2% 0% 0%',
			},
			buttonContainer: {
				width: '100%',
			},
			button: {
				margin: '3% 0% 0% 0%',
				background: '#8F4038',
				color: 'white',
				marginRight: '1%',
			},
			button2: {
				margin: '3% 0% 0% 0%',
				background: '#86a1a5',
				color: 'white',
				marginLeft: '1%',
			},
			thumbnail: {
				boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
				maxWidth: '90%',
				width: '90%',
			},
			link: {
				color: '#326891',
				fontWeight: 'bold',
				textDecoration: 'none',
				':hover': {
					textDecoration: 'underline',
				},
			},
		}
	}

	render() {
		const styles = this.getStyles();
		return (
			<div>
				<Header textColor={'black'} active={'portfolio'}/>
				<Spacer propHeight='15vh'></Spacer>
				<div style={{padding: 48}}>
					<Grid container style={styles.portfolioItem} spacing={0} alignItems='center' justify='center'>
						<Grid item xs={6}>
							<Grid container justify='center' alignItems='center'>
								<img src={require('../../assets/content/accord-demo-2.gif')} style={styles.thumbnail}></img>
							</Grid>
						</Grid>
						<Grid item xs={6} style={styles.textContainer}>
							<Grid container justify='flex-start' alignItems='center'>
								<p style={styles.title}>Accord</p>
								<div style={styles.descriptionText}>
									<p style={styles.subtitle}>
										Online platform for music groups to suggest, discuss, and curate songs for setlists
									</p>
									<p>
										{'Accord is the result of a final group project for a \
											software design class that I took in Fall 2016. My team of \
											four designed and implemented a functional, full-stack web \
											application from scratch in one month using languages and \
											frameworks covered throughout the course of the semester \
											such as Javascript, NodeJS, Mongoose, and Express. We also \
											used the project as an opportunity for a crash-course in React.'}
									</p>
									<p>
										{'The design of the data model and interface was completed \
											as a group during team meetings. Additional personal \
											contributions include the implementation of the log-in, \
											registration, account, and group pages as well as \
											integration with an existing lyric API to enable the \
											user to auto-populate the lyrics field for a suggested song.'}
									</p>
								</div>
								<div style={styles.chipContainer}>
									<Chip style={styles.chip} label='React' />
									<Chip style={styles.chip} label='NodeJS' />
									<Chip style={styles.chip} label='MongoDB' />
									<Chip style={styles.chip} label='HTML/CSS' />
									<Chip style={styles.chip} label='Javascript' />
								</div>
								<Button style={styles.button} className='button' href='https://allegro-accord.herokuapp.com/views/login' target="_blank">
									See it in action
								</Button>
							</Grid>
						</Grid>
					</Grid>
				 </div>
				 <div style={{padding: 48}}>
					 <Grid container style={styles.portfolioItem} spacing={0} alignItems='center' justify='center'>
	 					<Grid item xs={6} style={styles.textContainer}>
							<Grid container justify='flex-start' alignItems='center'>
								<p style={styles.title}>MIT Confessions Bot</p>
		 						<div>
		 							<p style={styles.subtitle}>
		 								Neural nets that mimic the style of posts made on the MIT Confessions Facebook page
		 							</p>
		 							<p>
		 								{'The \'Confessions\' Bot is the result of a final group \
											project for a graduate-level machine learning class that I \
											took in Fall 2017. Inspired by Andrej Karpathy\'s ' }
											<a style={styles.link} key='port-blog' href='http://karpathy.github.io/2015/05/21/rnn-effectiveness/' target="_blank">blog post</a>
											{', my team of three trained and compared the performance \
											 of different recurrent neural network architectures in \
											 generating language similar to that of the posts made on \
											 the MIT Confessions Facebook page.'}
		 							</p>
		 							<p>
										{'The neural architecture designs were completed as a team along\
			 								with code review and debugging. Additional personal contributions include the \
			 								adaptation of an open-source Facebook post scraper, Jupyter Notebook and GPU configuration for AWS, and \
			 								generating text using the trained models.'}
		 							</p>
		 						</div>
								<div style={styles.chipContainer}>
		 							<Chip style={styles.chip} label='Python' />
		 							<Chip style={styles.chip} label='AWS' />
		 						</div>
	 							<Button style={styles.button}  className='button' href='https://github.com/pargaw/MIT_Confessions_Bot' target="_blank">
	 								See the Code
	 							</Button>
		 						<Button style={styles.button2} className='button' href='https://drive.google.com/open?id=1jAuLPLoRGJnHuiufZlGBLMh0JaCu-09K' target="_blank">
		 							Read the Paper
		 						</Button>
							</Grid>
	 					</Grid>
	 					<Grid item xs={6}>
							<Grid container justify='center' alignItems='center'>
								<img src={require('../../assets/img/confessions-wide.png')} style={styles.thumbnail}></img>
							</Grid>
	 					</Grid>
	 				</Grid>
				 </div>

				 <div style={{padding: 48}}>
					 <Grid container style={styles.portfolioItem} spacing={0} justify='flex-start' alignItems='center'>
	 					<Grid item xs={6}>
							<Grid container justify='center' alignItems='center'>
								<iframe style={styles.thumbnail} width="560" height="315" src="https://www.youtube.com/embed/Hl0idKQHj-g" frameBorder="0" allowFullScreen></iframe>
							</Grid>
	 					</Grid>
	 					<Grid item xs={6} style={styles.textContainer}>
							<Grid container justify='flex-start' alignItems='center'>
								<p style={styles.title}>MusicBuddy</p>
								<div>
									<p style={styles.subtitle}>
		 								Tracks voice, motion, and gaze to automate scrolling
		 								on online chord charts for hands-free ukulele playing
		 							</p>
		 							<p>
										{'Music Buddy is the result of a final group project for a \
											graduate-level multi-modal UI design class that I took in \
											Spring 2017. My team of three designed and built a \
											client-side web app that tracks and combines voice, motion, \
											and gaze to determine when and how fast to scroll the \
											window while a user plays the ukulele. We also designed \
											and conducted a small user study to test the system and \
											collect data for a subsequent design iteration.'}
		 							</p>
		 							<p>
										{'The system and study design were completed as a team. \
		 								 Additional personal contributions include the controls to \
										 toggle modality functions and major source code refactorization.'}
		 							</p>
								</div>
								<div style={styles.chipContainer}>
		 							<Chip style={styles.chip} label='HTML/CSS' />
		 							<Chip style={styles.chip} label='Javascript' />
		 						</div>
		 						<Button style={styles.button} className='button' href='https://github.com/elainewlin/MusicBuddy' target="_blank">
		 							See the Code
		 						</Button>
								<Button style={styles.button2} className='button' href='https://drive.google.com/open?id=1f9K7ytCdOtXtEaouP1pmwxIewVGnRM5C' target="_blank">
		 							Read the Paper
		 						</Button>
							</Grid>
	 					</Grid>
	 				</Grid>
				 </div>

				 <div style={{padding: 48}}>
					 <Grid spacing={0} container style={styles.portfolioItem} justify='center' alignItems='center'>
	 					<Grid item xs={6} style={styles.textContainer}>
							<Grid container justify='flex-start' alignItems='center'>
								<p style={styles.title}>Evaluating Technology in Context: Mobile Apps for Waste Pickers</p>
	 							<p style={styles.subtitle}>
	 								Report and evaluation of existing mobile apps for waste pickers
	 							</p>
	 							<p>
	 								{"This report is the result of a final group project for "}
	 								<a style={styles.link} key='port-dlab' href='https://d-lab.mit.edu/' target="_blank">MIT's D-Lab</a>
	 								{" course on waste management that I took in Fall 2016. A fellow \
										classmate and I carried out research to support the "}
	 								<a style={styles.link} key='port- pia' href='https://impact-alliance.mit.edu/working-groups/inclusive-recycling-2016' target="_blank">Practical Impact Alliance's</a>
								 	{" conceptual design of a mobile app for waste pickers\
	 								in Brazil. Case studies involved both online research of exisiting mobile apps as well as\
	 								interviews with some of the inventors. In addition to case studies,\
	 								we also developed a set of criteria for success based on local and cultural context."}
	 							</p>
	 							<p>
	 								{"Additional personal contributions include the 'Kabadiwalla Connect'\
										and 'I Got Garbage' case studies as well as the diagram designs."}
	 							</p>
								<Button style={styles.button} className='button' href='https://drive.google.com/open?id=1BDmrEPl7fQU8hYExKb7Z_AFS8mrT1MJ6' target="_blank">
	 								Read the Report
	 							</Button>
							</Grid>
	 					</Grid>
	 					<Grid item item xs={6}>
							<Grid container justify='center' alignItems='center'>
								<img src={require('../../assets/img/d-lab-wide.png')} style={styles.thumbnail}></img>
							</Grid>
	 					</Grid>
	 				</Grid>
				 </div>
			</div>
		);
	}
}

export default Radium(Portfolio);
