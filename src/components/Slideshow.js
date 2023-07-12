import arrowLeft from '../assets/img/arrow_left.png';
import arrowRight from '../assets/img/arrow_right.png';
import React, { useState } from 'react';

export default function Slideshow({ slides }) {
	// utilisation du hook usestate pour créer l'index de l'image
	const [Index, setIndex] = useState(0);

	// fonction de la flèche droite
	const nextImg = () => {
		setIndex((Index + 1) % slides.length);
	};
	// fonction de la flèche gauche
	const previousImg = () => {
		setIndex((Index - 1 + slides.length) % slides.length);
	};
	return (
		<div className="slideshow">
			<img
				className="slideshow-img"
				src={slides[Index]}
				alt={`Slide ${Index}`}
			/>
			<img
				src={arrowLeft}
				alt="arrow left"
				className="arrow-left"
				onClick={previousImg}
			/>
			<img
				src={arrowRight}
				alt="arrow right"
				className="arrow-right"
				onClick={nextImg}
			/>
		</div>
	);
}
