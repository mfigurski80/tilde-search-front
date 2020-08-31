import React from 'react';
import './index.css'

export default function Searchbar({ onSearch }) {
	return (
		<form className='Searchbar' onSubmit={onSearch}>
			<input />
			<button type='submit'>Search</button>
		</form>
	)
}
