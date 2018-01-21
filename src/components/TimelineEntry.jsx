import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';


class TimelineEntry extends React.Component {
	getStyles() {
		return {
			container: {
				/* formatting */
				height: '50vh',
				/* text */
				fontSize: '20px',
				fontFamily: 'Source Sans Pro, sans-serif',
				color: 'white',
			},
			textCol: {
				padding: '4%',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			},
			thumbnailCol: {
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			},
			thumbnailCircle: {
				//width: '220px',
				height: '220px',
				borderRadius: '100%',
				border: 'solid 2px white',
			},
			logo: {
				//width: '120px',
				height: '130px',
			},
			logoContainer: {
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				width: '220px',
				height: '220px',
				border: 'solid 2px white',
				backgroundColor: 'white',
				borderRadius: '100%',
				zIndex: '2',
			},
			imgContainer: {
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				width: '220px',
				height: '220px',
				position: 'relative',
				zIndex: '2',
			},
			lineContainer: {
				display: 'flex',
				justifyContent: 'flex-end',
				alignItems: 'center',
				width: '50%',
			},
			rightColThumbnail: {
				width: '100%',
				display: 'flex',
				justifyContent: 'flex-start',
				alignItems: 'center',
			},
			leftColThumbnail: {
				width: '100%',
				display: 'flex',
				justifyContent: 'flex-end',
				alignItems: 'center',
			},
			rightLine: {
				border: 'solid 1px white',
				width: '100%',
				zIndex:'2',
				height: '0%',
			},
			leftLine: {
				border: 'solid 1px white',
				zIndex: '2',
				width: '100%',
				height: '0%',
			},
			detailContainer: {
				padding: '3%',
				textAlign: 'left',
			},
			heading: {
				fontSize: '32px',
				fontFamily: 'Source Sans Pro, sans serif',
			},
			subheading: {
				color: 'gray',
				fontSize: '22px',
				fontFamily: 'Raleway, sans serif',
				marginBottom: '2%',
			},
			detailBody: {
				fontFamily: 'Source Sans Pro, sans serif',
				fontSize: '20px',
				color: 'gray',
			},
		}
	}

	render() {
		const styles = this.getStyles();
		const { imgSrc, logo, title, year, description, leftAligned } = this.props;

		// logo vs. image
		var thumbnailStyle;
		var thumbnailContainerStyle;
		if (logo) {
			thumbnailStyle = styles.logo;
			thumbnailContainerStyle = styles.logoContainer;
		}
		else {
			thumbnailStyle = styles.thumbnailCircle;
			thumbnailContainerStyle = styles.imgContainer;
		}

		// left vs. right-aligned
		let lineStyle, leftLine, rightLine;
		let thumbnailColStyle, thumbnailStyles, textStyles;
		if (leftAligned) {
			lineStyle = styles.rightLine;
			thumbnailColStyle = styles.leftColThumbnail;
			leftLine = (<div style={{height:'0%'}}></div>);
			rightLine = (
				<Grid item xs={5} style={styles.lineContainer}>
					<div style={lineStyle}></div>
				</Grid>
			);
			thumbnailStyles = Object.assign({}, styles.thumbnailCol, {borderRight: 'solid 2px white'});
			textStyles = Object.assign({}, styles.textCol);
		} else {
			lineStyle = styles.leftLine;
			thumbnailColStyle = styles.rightColThumbnail;
			leftLine = (
				<Grid item xs={5} style={styles.lineContainer}>
					<div style={lineStyle}></div>
				</Grid>
			);
			rightLine = (<div style={{height:'0%'}}></div>);
			textStyles = Object.assign({}, styles.textCol, {borderRight: 'solid 2px white'});
			thumbnailStyles = Object.assign({}, styles.thumbnailCol);
		}

		const logoCol = (
			<Grid item xs={6} style={thumbnailStyles}>
				<Grid container spacing={0}>
					{leftLine}
					<Grid item xs={7} style={thumbnailColStyle}>
						<div style={thumbnailContainerStyle}>
							<img src={imgSrc} style={thumbnailStyle}></img>
						</div>
					</Grid>
					{rightLine}
				</Grid>
			</Grid>
		);

		const descriptionCol = (
			<Grid item xs={6} style={textStyles}>
				<Paper style={styles.detailContainer}>
					<div>
						<Typography type="headline" style={styles.heading}>
							{title}
						</Typography>
					</div>
					<div>
						<Typography type="subheading" style={styles.subheading}>
							{year}
						</Typography>
					</div>
					<div>
						<Typography type="body2" style={styles.detailBody}>
							{description}
						</Typography>
					</div>
				</Paper>
			</Grid>
		);

		let leftCol;
		let rightCol;
		if (leftAligned) {
			leftCol = logoCol;
			rightCol = descriptionCol
		} else {
			leftCol = descriptionCol
			rightCol = logoCol;
		}

		return (
			<div>
				<Grid container spacing={0} style={styles.container}>
					{leftCol}
					{rightCol}
				</Grid>
			</div>
		);
	}
}

TimelineEntry.propTypes = {
	imgSrc: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	year: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	logo: PropTypes.bool.isRequired,
	leftAligned: PropTypes.bool.isRequired,
};

export default Radium(TimelineEntry);
