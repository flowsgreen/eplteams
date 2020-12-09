import Team from '../Team/Team';
import './TeamList.css';

const TeamList = (props) => (
	<div className='team-list'>
		{props.filteredTeams.map((team) => (
			<Team
				key={team.idTeam}
				id={team.idTeam}
				text={team.strTeam}
				badge={team.strTeamBadge}
				stadium={team.strStadium}
				location={team.strStadiumLocation}
				website={team.strWebsite}
			/>
		))}
	</div>
);

export default TeamList;
