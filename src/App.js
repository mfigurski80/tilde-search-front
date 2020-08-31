import React from 'react';

import Result from './components/Result'
import Searchbar from './components/Searchbar'

function App() {
	return (
		<div className="App">
			<p>App Component</p>
			<Result id={0} result={{ title: "result",url: "eh", score: 2 }}/>
			<Searchbar />
    	</div>
	);
}

export default App;
