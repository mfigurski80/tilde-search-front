import React, { useState, useEffect } from 'react';

import Searchbar from './components/Searchbar'
import ResultFilter from './components/ResultFilter'
import getDictionary from './dictionary'


function App() {
	const [{dict, isLoading, isFailed}, setState] = useState({
		dict: {},
		isLoading: false,
		isFailed: false
	});
	const [query, setQuery] = useState('')

	useEffect(() => {
		setState({dict, isLoading: true, isFailed: false})
		getDictionary()
			.then(res => setState({dict: res, isLoading: false, isFailed: false}))
			.catch(err => setState({dict: {}, isLoading: false, isFailed: true}));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);


	const handleSearch = s => {
		console.log('Searching:', s)
		setQuery(s)
	}

	return (
		<div className="App container">

			<h1>~~~ Tilde Search ~~~ a search engine for tilde.club domains</h1>
			<Searchbar onSearch={handleSearch} />

			<h2>Events</h2>
			<p>Data loading...{isFailed ? 'FAILED' : (isLoading ? null : 'Done')}</p>

			{ query && dict ? (
				<ResultFilter query={query} dict={dict}/>
			) : null }

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
