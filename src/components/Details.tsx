import { FaStar } from 'react-icons/fa';
import { FetchedDetails } from '../types/Types';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
const Details = ({ data }: FetchedDetails) => {
	return (
		<>
			<Helmet>
				<title>Movies-App | {data.title.title}</title>
				<meta name="description" content={data.plotOutline.text} />
			</Helmet>
			<article>
				<div className="movie-cont">
					<div className="movie-img-cont">
						<Link to={'https://www.imdb.com' + data.title.id} target="_blank">
							<img src={data.title.image.url} alt="data.title.title" />
						</Link>
						<img src={data.title.image.url} className="background-blur-image" />
						<div className="rating-cont">
							<h3 className="rating-caption">IMDb RATINGS:</h3>
							<div className="rating-score">
								<FaStar />
								<b>{data.ratings.rating}</b>
								<span>/10</span>
							</div>
						</div>
					</div>
					<div className="movie-content">
						<h1>
							<Link to={'https://www.imdb.com' + data.title.id} target="_blank">
								{data.title.title}
							</Link>
						</h1>
						<p className="movie-date">{data.title.year}</p>
						<p className="movie-description">{data.plotOutline.text}</p>
						<h2 className="genres-title">GENRES</h2>
						<ul className="genres">
							{data.genres.map((genre) => {
								return (
									<Link
										key={genre}
										to={'https://www.imdb.com/search/title/?genres=' + genre}
										target="_blank"
									>
										<li>{genre}</li>
									</Link>
								);
							})}
						</ul>
					</div>
				</div>
			</article>
		</>
	);
};

export default Details;
