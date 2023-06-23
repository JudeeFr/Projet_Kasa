import Cards from './Cards';
import logements from '../logements.json';

export default function List() {
	return (
		<div className="list">
			{logements.slice(0, 6).map((housing, id) => (
				<Cards key={id} picture={housing.pictures[0]} title={housing.title} />
			))}
		</div>
	);
}
