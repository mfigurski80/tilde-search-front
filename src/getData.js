export async function getDictionary() {
	return fetch('./tags.json')
		.then(res => res.json())
}
export async function getMetadata() {
	return fetch('./sites.json')
		.then(res => res.json())
}