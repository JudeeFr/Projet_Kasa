export default function Host({ name, picture }) {
	return (
		<div className="host">
			<p>{name}</p>
			<img src={picture} alt="host"></img>
		</div>
	);
}
