import arrowLeft from '../assets/img/arrow_left.png';
import arrowRight from '../assets/img/arrow_right.png';

export default function Slideshow({ picture }) {
	return (
		<div className="slideshow">
			<img className="slideshow-img" src={picture} alt="logement" />
			<img src={arrowLeft} alt="arrow left" className="arrow-left" />
			<img src={arrowRight} alt="arrow right" className="arrow-right" />
		</div>
	);
}
