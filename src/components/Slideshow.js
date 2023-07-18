import arrowLeft from '../assets/img/arrow_left.png';
import arrowRight from '../assets/img/arrow_right.png';
import React, { useState } from 'react';

export default function Slideshow({ slides }) {
	// utilisation du hook usestate pour créer l'index de l'image
	const [index, setIndex] = useState(0);

	// fonction de la flèche droite
	const nextImg = () => {
		setIndex((index + 1) % slides.length);
	};
	// fonction de la flèche gauche
	const previousImg = () => {
		setIndex((index - 1 + slides.length) % slides.length);
	};

	return (
		<div className="slideshow">
			<img
				className="slideshow-img"
				src={slides[index]}
				alt={`Slide ${index}`}
			/>

			<p
				className="number-slides"
				style={{ display: slides.length == 1 ? 'none' : '' }}
			>
				{`${index + 1}/` + slides.length}
			</p>

			<img
				src={arrowLeft}
				alt="arrow left"
				className="arrow-left"
				style={{ display: slides.length == 1 ? 'none' : '' }}
				onClick={previousImg}
			/>
			<img
				src={arrowRight}
				alt="arrow right"
				className="arrow-right"
				style={{ display: slides.length == 1 ? 'none' : '' }}
				onClick={nextImg}
			/>
		</div>
	);
}
