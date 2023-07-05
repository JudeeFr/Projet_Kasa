import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Slideshow from '../components/Slideshow';
import { useParams } from 'react-router-dom';
import logements from '../logements.json';
import Title from '../components/Title';
import Host from '../components/Host';

import Collapse from '../components/Collapse';

export default function Housing() {
	let { id } = useParams();
	let housing = logements.filter((logement) => logement.id === id)[0];
	const rating = Number(housing.rating);
	return (
		<div>
			<Header />
			<Slideshow slides={housing.pictures} />

			<div className="info-line1">
				<div className="title">
					<Title title={housing.title} location={housing.location} />
				</div>

				<div className="host">
					<Host name={housing.host.name} picture={housing.host.picture} />
				</div>

				<div>
					<ul className="tag">
						{housing.tags.map((tag, index) => (
							<li className="tags" key={index}>
								{tag}
							</li>
						))}
					</ul>
				</div>

				<div className="rate">
					{[...Array(5)].map((star, i) => {
						const starValue = i + 1;
						return (
							<i
								key={i}
								className={`fa-solid fa-star ${
									starValue <= rating ? 'rate-full' : 'rate-empty'
								}`}
							></i>
						);
					})}
				</div>
			</div>

			<div className="info-line2">
				<Collapse
					className="collapse-housing"
					title="Description"
					text={housing.description}
				/>
				<Collapse
					className="collapse-housing"
					title="Equipements"
					text={housing.equipments.map((equipment, index) => (
						<li className="collapse-housing_equipment" key={index}>
							{equipment}
						</li>
					))}
				/>
			</div>

			<Footer />
		</div>
	);
}
