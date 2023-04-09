import Searchbar from '../components/Searchbar';
import Gallery from '../components/Gallery';
import useFetch from '../hooks/useFetch';
import InfoBox from '../components/InfoBox';
import { useParams } from 'react-router-dom';
import { URL1 } from '../helpers/HostUrls';
import { Helmet } from 'react-helmet';

const Home = () => {
	const { searchQuery } = useParams();

	const { data, isLoading, error } = useFetch(URL1 + searchQuery, searchQuery);

	return (
		<>
			<Helmet>
				<title>
					{searchQuery ? 'Movies-App | ' + searchQuery : 'Movies-App'}
				</title>
				<meta name="description" content="Find your favorite movie or show!" />
			</Helmet>
			<Searchbar />
			<Gallery fetchedData={data} />
			<InfoBox fetchedData={data} isLoading={isLoading} error={error} />
		</>
	);
};

export default Home;
