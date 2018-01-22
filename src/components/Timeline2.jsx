import React from 'react';
import Radium from 'radium';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import TimelineEntry from './TimelineEntry.jsx';


class Timeline2 extends React.Component {
	getStyles() {
		return {
			img: {
				marginTop: '5%',
				backgroundColor: '#86a1a5',
				height: '250vh',
				padding: '1%',
			},
			grid: {
				//height: '100vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			},
			heading: {
				fontSize: '35px',
				fontFamily: 'Cambo, serif',
				textAlign: 'center',
				color: 'white',
				marginBottom: '4%',
				marginTop: '5%',
			},
			headingBox: {
				display: 'inline',
			},
		}
	}

	render() {
		const styles = this.getStyles();
		const civicMediaDescription = 'The Center for Civic Media focuses on researching and developing tools that \
																	 support and foster civic participation and the flow of information between \
																	 communities. I am currently assisting with the development of their open-source \
																	 online news analysis platform, Media Cloud, designing and implementing new machine \
																	 learning features as part of my MEng thesis.';

	 const mitDescription = 'I recently finished my time as an undergrad at MIT, an extremely \
	 												 challenging, but rewarding, experience. \
													 I\'ve had the privilege to meet and work with talented, passionate, \
													 and kind people. My time here has encouraged me to take bigger risks, \
													 face difficult problems head-on, and to accept and learn from my mistakes.';

	 const vision2Description = 'I had the opportunity to intern at Vision2 Systems, a small tech start-up in \
	 														 my hometown Dallas that develops and maintains online giving software for \
															 nonprofits and churches. As one of my more earlier experiences working with \
															 web development tools, there was a lot I had to learn on the job; however I \
															 was working alongside a solid group of people and grew a lot, both techincally and professionally. \
															 Having dogs around the workplace was also a plus!';

	 const drink = 'drink'
	 const drinkLink = drink.link('https://www.npr.org/2017/07/06/535660662/in-santiago-chile-searching-for-a-drink-that-makes-you-weak-at-the-knees')
	 const mistiDescription = `The MIT International Science and Technology Initiative (MISTI) sends students \
	 													 to collaborate with research groups around the world. I had the chance \
														 to spend the summer in Santiago, Chile with the Natural Language Processing Group \
														 at the Universidad Cat\xF3lica, modeling document similarity of biomedical research papers. \
														 In addition to research, I was also able to travel around the country with other MIT students, catch a few \
														 f\xFAtbol games, eat chorrillana, and enjoy the occasional earthquake (both the drink and the natural phenomenon).`;

		return (
			<div style={styles.img}>
				<Grid container style={styles.grid} spacing={0}>
					<Grid item xs={12} style={styles.heading}>
						<div style={styles.headingBox}> - What I've Been Up To - </div>
					</Grid>
					<TimelineEntry imgSrc={'media cloud'}
									 leftAligned={true}
								   logo={true}
								   title={'Center for Civic Media'}
								   year={'2017-present'}
								   description={civicMediaDescription} />
								 <TimelineEntry imgSrc={'mit'}
									 leftAligned={false}
								   logo={false}
								   title={'MIT'}
								   year={'2013 - 2017'}
								   description={mitDescription} />
								 <TimelineEntry imgSrc={'vision2'}
									 leftAligned={true}
								   logo={true}
								   title={'Vision2'}
								   year={'2016'}
								   description={vision2Description} />
								 <TimelineEntry imgSrc={'chile'}
									 leftAligned={false}
								   logo={false}
								   title={'MISTI Chile'}
								   year={'2015'}
								   description={mistiDescription} />
				</Grid>
			</div>
		);
	}
}

export default Radium(Timeline2);
