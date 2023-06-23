export default function Banner({ picture }) {
	return (
		<div className="banner">
			<img src={picture} alt="banner img" />
			<p>Chez vous, partout et ailleurs</p>
		</div>
	);
}
