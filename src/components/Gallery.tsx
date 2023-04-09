import { Link } from 'react-router-dom';
import imagePlaceholder from '../assets/image-placeholder.svg';
import { sliceMovies } from '../helpers/sliceMovies';
import { FetchedMovies } from '../types/Types';

//fetch method for details: title/get-overview-details

function Gallery({ fetchedData: movies }: FetchedMovies) {
	return (
		<div className="gallery-cont">
			{movies && movies.d && (
				<div className="media-cont">
					{sliceMovies(movies).map((movie) => {
						return (
							<div className="media-tile" key={movie.id}>
								<Link to={`/movie/${movie.id}/${movie.l.replaceAll(' ', '_')}`}>
									<img
										src={movie.i ? movie.i.imageUrl : imagePlaceholder}
										alt={movie.l}
									/>
								</Link>
								<h2>{movie.l}</h2>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
}

export default Gallery;
