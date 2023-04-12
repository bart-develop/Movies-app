import { FetchedMovies } from '../types/Types';

const InfoBox = ({ fetchedData, isLoading, error }: FetchedMovies) => {
	return (
		<div className="information-cont">
			{isLoading && <h1>Loading data...</h1>}
			{!fetchedData && !isLoading && (
				<div className="try-searching">
					<h2>Movies will show up here</h2>
					<p>Try searching for them</p>
				</div>
			)}
			{error && <p className="error">Error: {error}</p>}
		</div>
	);
};

export default InfoBox;
