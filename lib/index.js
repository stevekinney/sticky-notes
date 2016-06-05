import React from 'react';
import { render } from 'react-dom';
import StickyNotes from './components/sticky-notes';

require('normalize.css');
require('../styles/stickies.css');

render(<StickyNotes />, document.querySelector('.stickies-application'));
