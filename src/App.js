import React, { useState, useEffect } from 'react';

import Searchbar from './components/Searchbar'
import ResultFilter from './components/ResultFilter'
import { getDictionary, getMetadata } from './getData'


function App() {
	const [{ dict, isDictLoading, isDictFailed }, setDict] = useState({
		dict: {},
		isDictLoading: false,
		isDictFailed: false
	});
	const [{ meta, isMetaLoading, isMetaFailed }, setMeta] = useState({
		meta: {},
		isDictLoading: false,
		isDictFailed: false
	})
	const [query, setQuery] = useState('')

	useEffect(() => {
		setDict({ dict, isDictLoading: true, isDictFailed: false })
		setMeta({ meta, isMetaLoading: true, isMetaFailed: false })
		getDictionary()
			.then(res => setDict({ dict: res, isDictLoading: false, isDictFailed: false }))
			.catch(err => setDict({ dict: {}, isDictLoading: false, isDictFailed: true }))
		getMetadata()
			.then(res => setMeta({ meta: res, isMetaLoading: false, isMetaFailed: false }))
			.catch(err => setMeta({ meta: {}, isMetaLoading: false, isMetaFailed: true }))
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);


	return (
		<div className="App container">

			<h1>~~~ Tilde Search ~~~ a search engine for tilde.club domains</h1>
			<Searchbar onSearch={setQuery} />

			<h2>Events</h2>
			<p>Tag Data loading...{isDictLoading ? null : (isDictFailed ? 'FAILED' : 'Done')}</p>
			<p>Meta Data loading...{isMetaLoading ? null : (isMetaFailed ? 'FAILED' : 'Done')}</p>

			{query && dict ? (
				<ResultFilter query={query} dict={dict} />
			) : null}

			<h2>About</h2>
			<p>
				Lovingly created by <a href='http://tilde.club/~mikofigs'>~mikofigs</a> with
				ReactJS and Python.
				See his other work at <a href='http://meeksfigs.surge.sh'>meeksfigs.surge.sh</a>
			</p>
		</div>
	);
}

export default App;
