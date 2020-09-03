
function filter(prompt, func) {
	return {prompt, func}
}

// func takes metadata for single url, rates how that url performs on filter with numerical score
export default [
	filter('prefer long content', metadata => +Math.log(Math.log(metadata['size'])).toFixed(4) - 1),
	filter('prefer unique', metadata => +metadata['avg_tfidf'].toFixed(4)),
	filter('prefer linked to', metadata => +Math.log(metadata['linked_domain'] + metadata['linked_user'] + 1).toFixed(4))
]
