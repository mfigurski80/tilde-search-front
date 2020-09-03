
function filter(prompt, func) {
	return {prompt, func}
}

// func takes metadata for single url, rates how that url performs on filter with numerical score
export default [
	filter('prefer long content', metadata => 1.5 * Math.log(Math.log(metadata['size'])) - 1),
	filter('prefer unique', metadata => 2 * metadata['avg_tfidf']),
	filter('prefer linked to', metadata => Math.log(metadata['linked_domain'] + 1))
]
