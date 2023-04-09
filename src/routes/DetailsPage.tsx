import useFetch from '../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { URL2 } from '../helpers/HostUrls';
import Details from '../components/Details';
import InfoBox from '../components/InfoBox';

const MoviePage = () => {
	const { id } = useParams();

	const { data, isLoading, error } = useFetch(URL2 + id, id);

	return (
		<>
			{data && <Details data={data} />}
			<InfoBox fetchedData={data} isLoading={isLoading} error={error} />
		</>
	);
};

export default MoviePage;
