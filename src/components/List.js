import Cards from './Cards';
import logements from '../logements.json';
import { useNavigate } from 'react-router-dom';

export default function List() {
	const navigate = useNavigate();

	// ajout de la fonction pour afficher la page selon l'id du logement
	function pageProduct(id) {
		navigate('Housing/' + id);
	}
	// ajout de la methode map pour afficher les logements et slice pour en selectionner 6
	return (
		<div className="list">
			{logements.map((housing, index) => (
				<div key={index} onClick={() => pageProduct(housing.id)}>
					<Cards key={index} picture={housing.cover} title={housing.title} />
				</div>
			))}
		</div>
	);
}
