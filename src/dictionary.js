const url = "./tags.json" 

export default async function getDictionary() {
	return fetch(url)
		.then(res => res.json())
		.catch(err => {
			console.error(err);
			throw err;
		});
}
