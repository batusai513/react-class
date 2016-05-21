import React from 'react';
import axios from 'axios';
import {Link} from 'react-router';

var App = React.createClass({
	displayName: 'App',
	getInitialState(){
		return {
			movies: []
		};
	},
	componentWillMount(){
		console.log("will mount");
	},
	componentDidMount(){
		var _this = this;
		axios.get('http://api.themoviedb.org/3/search/movie?query=hitch&api_key=82d75a47af09b78b447e7ef4a54265a2')
			.then(function(response){
				return response.data.results;
			})
			.then(function(movies){
				return _this.setState({movies: movies});
			})
			.catch(err => console.error(err));
	},
	componentWillReceiveProps(){
		console.log("will receive props");
	},
	shouldComponentUpdate(){
		console.log("shouldComponentUpdate;");
		return true;
	},
	componentWillUpdate(){
		console.log("componentWillUpdate;");
	},
	componentDidUpdate(){
		console.log("componentDidUpdate;");
	},
	componentWillUnmount(){
		console.log("componentWillUnmount;");
	},
	render(){
		return (
			<article>
				<h1>Peliculas OMDB</h1>
				<ul className="list-group">
					{
						this.state.movies.map(function(movie){
							return (
								<li key={movie.id} className="list-group-item">
									<div className="media">
										<div className="media-left">
											<img src={`http://image.tmdb.org/t/p/w185${movie.poster_path}`} alt="" />
										</div>
										<div className="media-body">
											<h2 className="h4">
												{/*<Link to="/movie/342633274?hola=mundo">asdasd</Link>*/}
												<Link to={
													{
														pathname: "/movie/" + movie.id,
														query: {hola: 'mundo'}}
												}>
													{movie.title} <small>({movie.release_date})</small>
												</Link>
											</h2>
											<p>{movie.overview}</p>
										</div>
									</div>
								</li>
							);
						})
					}
				</ul>
			</article>
		);
	}
});

export default App;