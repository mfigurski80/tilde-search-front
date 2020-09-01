import React from 'react';
import './Button.css';

export default function Button({className, type, onClick, href, children}) {
	return (
		<a
			className={`Button highlightable ${className}`}
			type={type}
			role='button'
			onClick={onClick || null}
			href={href}
		>{children}</a>
	)
}
