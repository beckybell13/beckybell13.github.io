import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter, HashRouter, Router } from 'react-router-dom';
import {StyleRoot} from 'radium';

import ScrollToTop from './components/util/ScrollToTop.jsx';
import AppContainer from './components/AppContainer.jsx';

require('./assets/styles/root.css');

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
