import React from 'react';
import stem from 'stemmer';

import Result from '../Result'

export default function ResultFilter({ query, dict, meta, activeFilters }) {
	query = (query || '')
	dict = (dict || {})

	// pull out results dictionary
	let results = {}
	query.split(' ').forEach(w => {
		w = stem(w.toLowerCase())
		let res = dict[w] || {}
		Object.keys(res).forEach(url => {
			results[url] = (results[url] || 0) + res[url]
		})
	})


	// apply active filters if possible
	if (activeFilters && meta) Object.keys(results).forEach(url => {
		results[url] += activeFilters.reduce((total, f) => total + f.func(meta[url]), 0)
	})

	// sort, format results into {score, url}
	const sortedResults = Object.keys(results)
		.sort((a, b) => results[a] < results[b])
		.map(url => ({ score: results[url], url: url }))

	return (
		<div className='ResultFilter'>
			<h2>Results for: {query} (count {sortedResults.length})</h2>
			{sortedResults.map((res, i) => (
				<Result key={i} {...res} />
			))}
		</div>
	)
}
