import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Slideshow from '../components/Slideshow';
import { useParams } from 'react-router-dom';
import logements from '../logements.json';
import Title from '../components/Title';
import Host from '../components/Host';
// import Rate from '../components/Rate';
import Collapse from '../components/Collapse';

export default function Housing() {
	let { id } = useParams();
	let housing = logements.filter((logement) => logement.id === id)[0];
	return (
		<div>
			<Header />
			<Slideshow slides={housing.pictures} />

			<div className="info-line1">
				<div className="column1">
					<Title title={housing.title} location={housing.location} />
					<ul className="tag">
						{housing.tags.map((tag, index) => (
							<li className="tags" key={index}>
								{tag}
							</li>
						))}
					</ul>
				</div>
				<div className="column2">
					<Host name={housing.host.name} picture={housing.host.picture} />
					{/* <Rate tag={housing.rate} /> */}
				</div>
			</div>
			<div className="info-line2">
				<Collapse title="Description" text={housing.description} />
				<Collapse
					title="Equipements"
					text={housing.equipments.map((equipment, index) => (
						<li className="equipment" key={index}>
							{equipment}
						</li>
					))}
				/>
			</div>
			<Footer />
		</div>
	);
}
