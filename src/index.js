/*
 * ./src/index.js
 *
 *	This is the webpack entry file
 */

import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter, HashRouter, Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import AppContainer from './components/AppContainer.jsx';
import {StyleRoot} from 'radium';
require('../assets/styles/root.css');

// TODO: set up node to get rid of the hashes:
// https://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writting-manually

render(
		<StyleRoot>
			<HashRouter>
				<ScrollToTop>
					<AppContainer />
				</ScrollToTop>
			</HashRouter>
		</StyleRoot>,
	document.getElementById('root')
);
