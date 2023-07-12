import './assets/css/app.css';
import Home from './pages/Home';
import About from './pages/About';
import Notfound from './pages/Notfound';
import Housing from './pages/Housing';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// ajout des chemins des pages
const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: 'About',
		element: <About />,
	},
	{
		path: '*',
		element: <Notfound />,
	},
	{
		path: 'Housing/:id',
		element: <Housing />,
	},
]);

function App() {
	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
