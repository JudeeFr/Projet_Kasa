import React from 'react';
import Header from '../components/Header';
import img404 from '../assets/img/404.png';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function Notfound() {
	return (
		<div>
			<Header />
			<div className="notfound">
				<img src={img404} alt="error 404"></img>
				<h2>Oups! La page que vous demandez n'existe pas.</h2>
				<Link to="/">Retourner sur la page d'accueil</Link>
			</div>
			<Footer />
		</div>
	);
}
