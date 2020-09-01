import React from 'react';
import stem from 'stemmer';

import Result from '../Result'

export default function ResultFilter({query, dict}) {
	let results = {}

	query.split().forEach(w => {
		w = stem(w.toLowerCase())
		let res = dict[w] || {}
		Object.keys(res).forEach(url => {
			results[url] += (results[url] || 0) + res[url]
		})
	})

	return (
		<div className='ResultFilter'>
			<p>ResultFilter Component</p>	
			{Object.keys(results).map((url, i) => (
				<Result key={i} url={url} />
			))}
		</div>
	)
}
