import React from 'react';

export default function Result({ id, url, score }) {
	return (
		<p>{String(score).padEnd(7, '0')}: <a href={`http://tilde.club/${url}`}>{url}</a></p>
	)
}
