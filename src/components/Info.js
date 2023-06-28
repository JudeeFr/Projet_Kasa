import Title from '../components/Title';
import Host from '../components/Host';
import Tag from '../components/Tag';
import Rate from '../components/Rate';
import Collapse from '../components/Collapse';

export default function Info(housing) {
	return (
		<div className="info">
			<div className="column1">
				<Title title={housing.title} location={housing.location} />
				<Tag tag={housing.tags} />
				<Collapse title="" text="" />
			</div>
			<div className="column2">
				<Host name={housing.host} picture={housing.host} />
				<Rate tag={housing.rate} />
				<Collapse title="" text="" />
			</div>
		</div>
	);
}
