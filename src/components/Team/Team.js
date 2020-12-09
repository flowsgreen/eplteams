import './Team.css';

const Team = (props) => (
	<div className='team-container'>
		<img alt={props.text} src={`${props.badge}/preview`} />
		<h2>{props.text}</h2>
		<p>
			{props.stadium}, {props.location} <br />
			<a href={`https://${props.website}`}>{props.website}</a>
		</p>
	</div>
);

export default Team;
