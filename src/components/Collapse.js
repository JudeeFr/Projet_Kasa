export default function Collapse({ title, text }) {
	return (
		<div className="collapse">
			<div className="collapse_title">{title}</div>
			<div className="collapse_text">{text}</div>
		</div>
	);
}
