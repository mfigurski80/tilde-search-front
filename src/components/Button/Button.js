import React from 'react';

import './Button.css'

export default function Button({ onClick, className, children }) {

	const handleClick = e => {
		e.preventDefault();
		if (onClick)
			onClick(e);
	}

	return (
		<button className={`Button ${className}`} onClick={handleClick}>
			{children}
		</button>
	)
}