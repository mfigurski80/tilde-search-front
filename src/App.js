import React, { useState, useEffect } from 'react';

import Searchbar from './components/Searchbar'
import ResultFilter from './components/ResultFilter'
import getDictionary from './dictionary'


function App() {
	const [{dict, isLoading}, setState] = useState({dict: {}, isLoading: false});
	const [query, setQuery] = useState('')

	useEffect(() => {
		setState({dict, isLoading: true})
		getDictionary()
			.then(res => setState({dict: res, isLoading: false}));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleSearch = s => {
		console.log('Searching:', s)
		setQuery(s)
	}

	return (
		<div className="App container">
			<h1>~~~ Tilde Search ~~~</h1>
			<Searchbar onSearch={handleSearch} />
			<h2>Search Engine for the tilde.club Domain</h2>
			<p>Data loading...{isLoading ? null : 'Done'}</p>
			<p>Search query...{query}</p>
			{ query && dict ? (
				<ResultFilter query={query} dict={dict}/>
			) : null }
    	</div>
	);
}

export default App;
