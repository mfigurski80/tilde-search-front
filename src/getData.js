module.exports = {
	getDictionary: async () => {
		return fetch('./tags.json')
			.then(res => res.json())
	},
	getMetadata: async () => {
		return fetch('./sites.json')
			.then(res => res.json())
	}
}