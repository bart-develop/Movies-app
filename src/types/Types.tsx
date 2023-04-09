export interface FetchedMovies {
	fetchedData: Movies | null;
	isLoading?: boolean;
	error?: string | null;
}

export type Movies = {
	d: Array<Movie>;
};

interface Movie {
	i: { imageUrl: string };
	l: string;
	id: string;
}

export interface FetchedDetails {
	data: {
		title: { title: string; image: { url: string }; year: number; id: string };
		ratings: { rating: number };
		plotOutline: { text: string };
		genres: Array<string>;
	};
}
