const info = (...params: any[]) => {
	// eslint-disable-next-line no-undef
	if (process.env.NODE_ENV !== 'test')
		console.log(...params)
}

const error = (...params: any[]) => {
	console.error(...params)
}

module.exports = {
	info, error
}