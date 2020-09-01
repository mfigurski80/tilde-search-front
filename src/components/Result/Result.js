import React from 'react';

export default function Result({ id, url, score }) {
	return (
		<p>{score}: <a href={`http://tilde.club/${url}`}>{url}</a></p>
	)
}
