import React from 'react';

import './Result.css';

export default function Result({ id, url, score }) {
	return (
		<div className='Result'>
			<p>[{score.toFixed(4)}]</p>
			<a
				href={`http://tilde.club/${url}`}
			>{url}</a>
		</div>
	)
}
