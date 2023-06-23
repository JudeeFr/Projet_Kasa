import Title from '../components/Title';
import Host from '../components/Host';
import Tag from '../components/Tag';
import Rate from '../components/Rate';
import logements from '../logements.json';

export default function Info() {
	return (
		<div className="info">
			<div className="column1">
				<Title title={logements.title} location={logements.location} />
				<Tag tag={logements.tags} />
			</div>
			<div className="column2">
				<Host name={logements.host} picture={logements.host} />
				<Rate tag={logements.rate} />
			</div>
		</div>
	);
}
