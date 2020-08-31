import React, { useRef } from 'react';
import './Searchbar.css'

import Button from '../Button'

export default function Searchbar({ onSearch }) {
	const input_elem = useRef()

	return (
		<form className='Searchbar' onSubmit={onSearch}>
			<input className='Searchbar_input' ref={input_elem} type='text' />
			<Button className='Searchbar_button'>Search...</Button>
		</form>
	)
}
