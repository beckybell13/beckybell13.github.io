import React from 'react';
import Radium from 'radium';
import Grid from 'material-ui/Grid';
import Chip from 'material-ui/Chip';
import Button from 'material-ui/Button';
import Header from './Header.jsx';

class Experience extends React.Component {
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
		}
	}

	render() {
		const styles = this.getStyles();
		return (
			<div style={{padding: '1%'}}>
				<Header textColor={'black'} active={'portfolio'}/>
				<div style={{padding: 48}}>
					<Grid container style={styles.portfolioItem} spacing={12} align='center' justify='center'>
						<Grid item xs={6}>
							<Grid container justify='center' align='center'>
								<img src='./src/content/accord-demo-2.gif' style={styles.thumbnail}></img>
							</Grid>
						</Grid>
						<Grid item xs={6} style={styles.textContainer}>
							<Grid container justify='flex-start' align='center'>
								<p style={styles.title}>Accord</p>
								<div style={styles.descriptionText}>
									<p style={styles.subtitle}>
										Online platform for music groups to suggest, discuss, and curate songs for setlists
									</p>
									<p>
										Final group project for Software Studio class in Fall 2016. Designed and built
										a fully-functional, full-stack web application from scratch
										in one month in a team of four. Used languages and frameworks
										learned throughout the course of the semester such as javascript,
										NodeJS, mongoose, and Express. Learned React during course of the project.
									</p>
									<p>
										The design of the data model and interface was completed as
										 a group during team meetings. Additional personal contributions
										 include the implementation of the log-in, registration, account,
										 and group pages as well as integration with a lyric API for
										 users to find lyrics to a suggested song.
									</p>
								</div>
								<div style={styles.chipContainer}>
									<Chip style={styles.chip} label='React' />
									<Chip style={styles.chip} label='NodeJS' />
									<Chip style={styles.chip} label='MongoDB' />
									<Chip style={styles.chip} label='HTML/CSS' />
									<Chip style={styles.chip} label='Javascript' />
								</div>
								<Button style={styles.button}>
									<a className='button' style={{color:'white'}} href='https://allegro-accord.herokuapp.com/views/login' target="_blank">
										See it in action
									</a>
								</Button>
							</Grid>
						</Grid>
					</Grid>
				 </div>
				 <div style={{padding: 48}}>
					 <Grid container style={styles.portfolioItem} spacing={12} align='center' justify='center'>
	 					<Grid item xs={6} style={styles.textContainer}>
							<Grid container justify='flex-start' align='center'>
								<p style={styles.title}>MIT Confessions Bot</p>
		 						<div>
		 							<p style={styles.subtitle}>
		 								Neural nets that mimic style and tone of posts made on the MIT Confessions Facebook page
		 							</p>
		 							<p>
		 								Final group project for graduate-level machine learning class in Fall 2017. Trained
		 								and compared performance of different types of recurrent neural networks
		 								for language modeling task in team of three using the Keras deep learning library.
		 							</p>
		 							<p>
										Neural architecture designs were completed as a team along
		 								with code review and debugging. Additional personal contributions include the
		 								adaptation of an open-source Facebook post scraper, Jupyter Notebook and GPU configuration for AWS, and
		 								generating text using the trained models.
		 							</p>
		 						</div>
								<div style={styles.chipContainer}>
		 							<Chip style={styles.chip} label='Python' />
		 							<Chip style={styles.chip} label='AWS' />
		 						</div>
	 							<Button style={styles.button}>
	 								<a className='button' style={{color:'white'}} href='https://github.com/pargaw/MIT_Confessions_Bot' target="_blank">
	 									See the Code
	 								</a>
	 							</Button>
		 						<Button style={styles.button2}>
		 							<a className='button' style={{color:'white'}} href="./src/content/ms6.pdf" download>
		 								Read the Paper
		 							</a>
		 						</Button>
							</Grid>
	 					</Grid>
	 					<Grid item xs={6}>
							<Grid container justify='center' align='center'>
								<img src='./src/img/confessions-wide.png' style={styles.thumbnail}></img>
							</Grid>
	 					</Grid>
	 				</Grid>
				 </div>

				 <div style={{padding: 48}}>
					 <Grid container style={styles.portfolioItem} spacing={24} justify='flex-start' align='center'>
	 					<Grid item xs={6}>
							<Grid container justify='center' align='center'>
								<iframe style={styles.thumbnail} width="560" height="315" src="https://www.youtube.com/embed/Hl0idKQHj-g" frameBorder="0" allowFullScreen></iframe>
							</Grid>
	 					</Grid>
	 					<Grid item xs={6} style={styles.textContainer}>
							<Grid container justify='flex-start' align='center'>
								<p style={styles.title}>MusicBuddy</p>
								<div>
									<p style={styles.subtitle}>
		 								Tracks voice, motion, and gaze to automate scrolling
		 								on online chord charts for hands-free ukulele playing
		 							</p>
		 							<p>
										Final group project for graduate-level multi-modal UI design class in Spring 2017.
										 Designed and built in a team of three a client-side web app
										 that tracks and combines voice, motion, and gaze to determine
										 when and how fast to scroll the window while a user plays the
										 ukulele. Designed and conducted a small user study to test
										 system and collect data for a subsequent design iteration.
		 							</p>
		 							<p>
										System and study design were completed as a team.
		 								Additional personal contributions include the controls to toggle modality functions
										and major source code refactorization.
		 							</p>
								</div>
								<div style={styles.chipContainer}>
		 							<Chip style={styles.chip} label='HTML/CSS' />
		 							<Chip style={styles.chip} label='Javascript' />
		 						</div>
		 						<Button style={styles.button}>
		 							<a className='button' style={{color:'white'}} href='https://github.com/elainewlin/MusicBuddy' target="_blank">
		 								See the Code
		 							</a>
		 						</Button>
								<Button style={styles.button2}>
		 							<a className='button' style={{color:'white'}} href='./src/content/musicbuddy-writeup.pdf' download>
		 								Read the Paper
		 							</a>
		 						</Button>
							</Grid>
	 					</Grid>
	 				</Grid>
				 </div>

				 <div style={{padding: 48}}>
					 <Grid container gutter={0} style={styles.portfolioItem} spacing={24} justify='center' align='center'>
	 					<Grid item xs={6} style={styles.textContainer}>
							<Grid container justify='flex-start' align='center'>
								<p style={styles.title}>Evaluating Technology in Context: Mobile Apps for Waste Pickers</p>
	 							<p style={styles.subtitle}>
	 								Report and evaluation of existing mobile apps for waste pickers
	 							</p>
	 							<p>
	 								{"Final group project for "}
	 								<a className='link' href='https://d-lab.mit.edu/'>MIT's D-Lab</a>
	 								{" course on waste management. Carried out research to support the "}
	 								<a className='link' href='https://impact-alliance.mit.edu/working-groups/inclusive-recycling-2016'>Practical Impact Alliance's</a>
								 	{" conceptual design of a mobile app for waste pickers\
	 								in Brazil. Case studies involved both online research of exisiting mobile apps as well as\
	 								interviews with some of the inventors. In addition to case studies,\
	 								we also developed criteria for success based on local and cultural context."}
	 							</p>
	 							<p>
	 								{"Research and interviews were completed with a fellow student. Additional personal contributions\
	 								include the 'Kabadiwalla Connect' and 'I Got Garbage' case studies\
	 								as well as the diagram designs."}
	 							</p>
								<Button style={styles.button}>
	 								<a className='button' style={{color:'white'}} href="./src/content/waste-picker-case-studies.pdf" download>
	 									Read the Report
	 								</a>
	 							</Button>
							</Grid>
	 					</Grid>
	 					<Grid item item xs={6}>
							<Grid container justify='center' align='center'>
								<img src='./src/img/d-lab-wide.png' style={styles.thumbnail}></img>
							</Grid>
	 					</Grid>
	 				</Grid>
				 </div>
			</div>
		);
	}
}

export default Radium(Experience);
