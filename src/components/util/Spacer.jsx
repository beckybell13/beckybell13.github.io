import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Radium from 'radium';

class Spacer extends React.Component {
	render() {
    const { propHeight } = this.props;
		return (
			<div style={{height: propHeight}}>
			</div>
		);
	}
}

Spacer.propTypes = {
	propHeight: PropTypes.string.isRequired,
};

export default Radium(Spacer);
