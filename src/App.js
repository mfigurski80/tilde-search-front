import React, { useState, useEffect } from 'react';

import Searchbar from './components/Searchbar'
import getDictionary from './dictionary'


function App() {
	const [{data, isLoading}, setState] = useState({data: {}, isLoading: false});

	useEffect(() => {
		setState({data, isLoading: true})
		getDictionary()
			.then(res => setState({data: res, isLoading: false}));
	}, []);

	return (
		<div className="App">
			<p>App Component</p>
			<p>Loading? {String(isLoading)}</p>
			<Searchbar />
    	</div>
	);
}

export default App;
