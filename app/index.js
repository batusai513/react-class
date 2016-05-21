import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import App from './components/app.js';
import Movie from './components/movie.js';



ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App} />
		<Route path="/movie(/:id)" component={Movie} />
	</Router>
	,document.getElementById('root')
);