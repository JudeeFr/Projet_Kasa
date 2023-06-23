function Cards({ title, picture }) {
	return (
		<div className="cards">
			<img src={picture} alt="housing" />
			<span>{title}</span>
		</div>
	);
}

export default Cards;
