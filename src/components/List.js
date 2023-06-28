import Cards from './Cards';
import logements from '../logements.json';
import { useNavigate } from 'react-router-dom';

export default function List() {
	const navigate = useNavigate();

	function pageProduct(id) {
		navigate('Housing/' + id);
	}
	return (
		<div className="list">
			{logements.slice(0, 6).map((housing, index) => (
				<div key={index} onClick={() => pageProduct(housing.id)}>
					<Cards key={index} picture={housing.cover} title={housing.title} />
				</div>
			))}
		</div>
	);
}
