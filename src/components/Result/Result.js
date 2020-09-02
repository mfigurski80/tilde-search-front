import React from 'react';

import './Result.css';

export default function Result({ id, url, score }) {
	return (
		<div className='Result'>
			<p>[{String(score).padEnd(7, '0')}]</p>
			<a
				href={`http://tilde.club/${url}`}
			>{url}</a>
		</div>
	)
}
