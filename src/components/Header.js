import { Link } from 'react-router-dom';
import logo1 from '../assets/img/LOGO.png';

export default function Header() {
	return (
		<div>
			<Link to="/">
				<img src={logo1} alt="logo" />
			</Link>
			<nav>
				<Link to="/">Accuei</Link>
				<Link to="/Apropos">A propos</Link>
			</nav>
		</div>
	);
}
