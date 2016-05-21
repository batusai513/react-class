import React from 'react';

export default React.createClass({
	displayName: 'movie',
	render(){
		console.log(this.props);
		return (
			<article>
				<h1>Pelicula {this.props.params.id}</h1>
				<div className="media">
					<div className="media-left">
						<img src="" alt=""/>
					</div>
					<div className="media-body">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora vel consectetur officiis saepe quis voluptatum delectus quia beatae porro, omnis nam, fuga consequatur. Autem consectetur ipsa recusandae dolorem eligendi, ullam!
						</p>
					</div>
				</div>
			</article>
		);
	}
})