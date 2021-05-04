import { h } from 'preact';
import { Router } from 'preact-router';



// Code-splitting is automated for `routes` directory

import Dashboard from '../components/Dashboard/Dashboard';
const App = () => (
	<div id="app">
		<Dashboard />
	</div>
)

export default App;
