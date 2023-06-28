import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Slideshow from '../components/Slideshow';
import { useParams } from 'react-router-dom';
import logements from '../logements.json';
import Info from '../components/Info';

export default function Housing() {
	let { id } = useParams();
	let housing = logements.filter((logement) => logement.id === id)[0];
	return (
		<div>
			<Header />
			<Slideshow slides={housing.pictures} />
			<Info housing={housing} />
			<Footer />
		</div>
	);
}
