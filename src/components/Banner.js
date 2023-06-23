export default function Banner({ picture, text }) {
	return (
		<div className="banner">
			<img src={picture} alt="banner img" />
			<p>{text}</p>
		</div>
	);
}
