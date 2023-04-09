import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';
import Home from './routes/Home';
import DetailsPage from './routes/DetailsPage';
import NotFound from './routes/NotFound';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/search/:searchQuery" element={<Home />} />
				<Route path="/movie/:id/*" element={<DetailsPage />} />
				<Route path="/404" element={<NotFound />} />
				<Route path="*" element={<Navigate to="/404" />} />
			</Routes>
		</Router>
	);
}
//main page
//each movie custom page /movies/tt1929412 or /movies/the-cars

export default App;
