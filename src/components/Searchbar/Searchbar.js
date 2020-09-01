import React, { useRef } from 'react';
import './Searchbar.css';

import Button from '../Button/';

export default function Searchbar({ onSearch }) {
	const input_elem = useRef()

	const handleSearch = (e) => {
		e.preventDefault();
		onSearch(input_elem.current.value);
	}

	return (
		<form className='Searchbar' onSubmit={handleSearch}>
			<p>$</p>
			<input
				className='Searchbar_input'
				ref={input_elem}
				type='text'
				placeholder='query'
			/>
			<Button
				className='Searchbar_button'
				type='submit'
				onClick={handleSearch}
			>search</Button>
		</form>
	)
}
