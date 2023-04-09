import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Searchbar() {
	const navigate = useNavigate();

	const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const value = event.currentTarget.searchInput.value.trim();
		if (value) {
			navigate('/search/' + value);
		}
	};

	return (
		<form
			className="search-container"
			onSubmit={handleSearch}
			autoComplete="off"
		>
			<input
				type="text"
				className="search-input"
				name="searchInput"
				placeholder="Find your favourite movie or show!"
			/>
			<button type="submit" className="search-button">
				<FaSearch />
			</button>
		</form>
	);
}

export default Searchbar;
