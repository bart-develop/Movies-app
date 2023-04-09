import { Movies } from '../types/Types';

export function sliceMovies(movies: Movies) {
	//omits awards-central object and similar
	if (!movies.d[0].id.startsWith('tt')) {
		return movies.d.slice(1, 7);
	} else {
		return movies.d.slice(0, 6);
	}
}
