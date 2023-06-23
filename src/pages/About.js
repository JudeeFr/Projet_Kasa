import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Collapse from '../components/Collapse';
import aboutImg from '../assets/img/aboutImg.png';

export default function About() {
	return (
		<div>
			<Header />
			<Banner picture={aboutImg} />
			<Collapse title="" text="" />
			<Collapse title="" text="" />
			<Collapse title="" text="" />
			<Collapse title="" text="" />
			<Footer />
		</div>
	);
}
