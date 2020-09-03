import React from 'react';
import './Checkbox.css';

export default function Checkbox({label, value, onClick, className}) {

	const handleClick = (e) => {
		if (onClick) onClick(!value)
	}

	return (
		<p className={`Checkbox ${className}`} onClick={handleClick}>
			<input type='checkbox' checked={value} readOnly/>
			<label aria-describedby="label">{label}</label>
		</p>
	)
}
