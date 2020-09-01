import React, { useRef } from 'react';
import './Searchbar.css'

export default function Searchbar({ onSearch }) {
	const input_elem = useRef()

	const handleSearch = (e) => {
		e.preventDefault()
		console.log(input_elem.current.value)
	}

	return (
		<form className='Searchbar' onSubmit={handleSearch}>
			<input className='Searchbar_input' ref={input_elem} type='text' />
			<button className='Searchbar_button' type='submit'>Search</button>
		</form>
	)
}
