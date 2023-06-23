import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import List from '../components/List';
import Footer from '../components/Footer';
import banner from '../assets/img/banner.png';

export default function Home() {
	return (
		<div>
			<Header />
			<Banner picture={banner} text="Chez vous, partout et ailleurs" />
			<List />
			<Footer />
		</div>
	);
}
