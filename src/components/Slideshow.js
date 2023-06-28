import arrowLeft from '../assets/img/arrow_left.png';
import arrowRight from '../assets/img/arrow_right.png';
import React, { useState } from 'react';

export default function Slideshow({ slides }) {
	const [Index, setIndex] = useState(0);

	const nextImg = () => {
		setIndex((Index + 1) % slides.length);
	};
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
