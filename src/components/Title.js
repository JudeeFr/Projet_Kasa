export default function Title({ title, location }) {
	return (
		<div className="title_content">
			<h1>{title}</h1>
			<p>{location}</p>
		</div>
	);
}
