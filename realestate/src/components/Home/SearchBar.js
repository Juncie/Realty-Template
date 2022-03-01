import React from 'react';

import '../../styles/components/searchbar.css';

function SearchBar() {
	return (
		<div className='searchbar-container'>
			<h1 className='slogan'>You're Almost Home</h1>
			<div className='searchbar'>
				<input
					className='searchInput'
					type='text'
					placeholder='ex. Houses under $4000 in Phoenix'
				/>
			</div>
		</div>
	);
}

export default SearchBar;
