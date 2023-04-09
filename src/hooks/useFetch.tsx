import { useEffect, useState } from 'react';
import { API_KEY } from '../private/API_KEY';

const useFetch = (url: string, searchQuery: string | undefined) => {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const abortCont = new AbortController();

		if (searchQuery) {
			// reset data on each search
			setData(null);
			setIsLoading(true);
			setError(null);

			fetch(url, {
				method: 'GET',
				headers: {
					'X-RapidAPI-Key': API_KEY,
					'X-RapidAPI-Host': 'imdb8.p.rapidapi.com',
				},
				signal: abortCont.signal,
			})
				.then((res) => {
					if (!res.ok) {
						throw Error('Could not fetch the data for that resource.');
					}
					return res.json();
				})
				.then((data) => {
					setData(data);
					setIsLoading(false);
					setError(null);
				})
				.catch((err) => {
					if (err.name === 'AbortError') {
						console.log('fetch aborted');
					} else {
						setIsLoading(false);
						setError(err.message);
					}
				});
		} else if (!searchQuery) {
			setData(null);
			setIsLoading(false);
			setError(null);
		}

		return () => abortCont.abort();
	}, [url]);
	return { data, isLoading, error };
};

export default useFetch;
