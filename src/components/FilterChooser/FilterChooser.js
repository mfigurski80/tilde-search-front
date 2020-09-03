import React, { useState } from 'react';
import './FilterChooser.css';

import Checkbox from '../Checkbox'
import filters from './filters'

export default function FilterChooser({ onChoose }) {
	const [isActive, setIsActive] = useState(filters.map(f => false))

	const handleNthIsActive = (n, active) => {
		const newIsActive = [...isActive]
		newIsActive[n] = active
		setIsActive(newIsActive)
		if (onChoose) onChoose(filters.filter((f, i) => newIsActive[i]))
	}

	return (
		<div className='FilterChooser'>
			<h2>Search Options</h2>
			<div className='FilterChooser_options'>
				{filters.map((f, i) => (
					<Checkbox
						key={i}
						label={f.prompt}
						value={isActive[i]}
						onClick={active => handleNthIsActive(i, active)}
					/> 
				))}
			</div>
		</div>
	)
}
