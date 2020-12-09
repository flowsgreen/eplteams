import React, { Component } from 'react';
import './App.css';
import SearchBox from './components/SearchBox/SearchBox';
import TeamList from './components/TeamList/TeamList';

class App extends Component {
	constructor() {
		super();
		this.state = {
			teams: [],
			searchBox: '',
		};
	}

	componentDidMount() {
		fetch(
			'https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4328'
		)
			.then((response) => response.json())
			.then((val) => this.setState({ teams: val.teams }));
	}

	handleSearchChange = (e) => this.setState({ searchBox: e.target.value });

	render() {
		const { teams, searchBox } = this.state;
		const filteredTeams = teams.filter((team) =>
			team.strTeam.toLowerCase().includes(searchBox.toLowerCase())
		);
		return (
			<div className='App'>
				<h1>EPL Teams</h1>
				<SearchBox
					handleChange={this.handleSearchChange}
					placeholder='Search Team'
				/>
				<TeamList filteredTeams={filteredTeams} />
			</div>
		);
	}
}

export default App;
