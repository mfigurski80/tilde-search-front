import React from 'react';
import stem from 'stemmer';

import Result from '../Result'

export default function ResultFilter({query, dict}) {
	let results = {}
	query.split().forEach(w => {
		w = stem(w.toLowerCase())
		let res = dict[w] || {}
		console.log(res)
		Object.keys(res).forEach(url => {
			results[url] = (results[url] || 0) + res[url]
		})
	})
	
	const sortedResults = Object.keys(results)
		.sort((a, b) => results[a] < results[b])
		.map(url => ({score: results[url], url: url}))

	console.log(results)

	return (
		<div className='ResultFilter'>
			<h2>Results for: {query}</h2>
			{sortedResults.map((res, i) => (
				<Result key={i} {...res} />
			))}
		</div>
	)
}
