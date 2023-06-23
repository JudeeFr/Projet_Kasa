import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Slideshow from '../components/Slideshow';
import logements from '../logements.json';
import Info from '../components/Info';

export default function About() {
	return (
		<div>
			<Header />
			{logements.slice(1, 2).map((housing, id) => (
				<Slideshow key={id} picture={housing.pictures[2]} />
			))}
			<Info />
			<Footer />
		</div>
	);
}
