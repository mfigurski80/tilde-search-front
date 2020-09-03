import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import Searchbar from './components/Searchbar'
import ResultFilter from './components/ResultFilter'
import FilterChooser from './components/FilterChooser'
import { getDictionary, getMetadata } from './getData'


function useQuery() {
	return new URLSearchParams(useLocation().search);
}


function App() {
	const history = useHistory()
	const query = useQuery()
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
	const [activeFilters, setActiveFilters] = useState([])

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


	const handleSearch = s => {
		if (s === '') return history.push('./')
		history.push(`?searchquery=${s.replace(' ', '-')}`)
	}

	return (
		<div className="App container">

			<h1>~~~ Tilde Search ~~~ search engine for tilde.club domain</h1>
			<Searchbar onSearch={handleSearch} />

			<FilterChooser onChoose={setActiveFilters} />

			{(query.get('searchquery')) ? (
				<ResultFilter
					query={query.get('searchquery').replace('-', ' ')}
					dict={dict}
					meta={meta}
					activeFilters={activeFilters}
				/>
			) : null}

			<h2>Debug/Events</h2>
			<p>Tag Data loading...{isDictLoading ? null : (isDictFailed ? 'FAILED' : 'Done')}</p>
			<p>Meta Data loading...{isMetaLoading ? null : (isMetaFailed ? 'FAILED' : 'Done')}</p>

			<h2>About</h2>
			<p>
				Lovingly created by <a href='http://tilde.club/~mikofigs'>~mikofigs</a> with
				ReactJS and Python.
				See his other work at <a href='http://meeksfigs.surge.sh'>meeksfigs.surge.sh</a>,
				or view the project source on 
				github <a href='https://github.com/mfigurski80/tilde-search-front'>here</a>,
				and <a href='https://github.com/mfigurski80/tilde-search'>here</a>.
			</p>
		</div>
	);
}

export default App;
