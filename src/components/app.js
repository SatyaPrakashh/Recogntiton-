import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory

import Dashboard from '../routes/Dashboard/Dashboard';
const App = () => (
	<div id="app">
		<Dashboard />
	</div>
)

export default App;
