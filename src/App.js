import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			fixtures: [
				{
					name: 'arsenal',
					id: 1,
				},
				{
					name: 'chelsea',
					id: 2,
				},
				{
					name: 'man-city',
					id: 3,
				},
			],
		};
	}

	render() {
		return (
			<div>
				{this.state.fixtures.map((fixture) => (
					<h1 key={fixture.id}>{fixture.name}</h1>
				))}
			</div>
		);
	}
}

export default App;
