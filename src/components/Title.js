export default function Title({ title, location, host, rate, tag }) {
	return (
		<div className="title">
			<h1>{title}</h1>
			<p>{location}</p>
		</div>
	);
}
