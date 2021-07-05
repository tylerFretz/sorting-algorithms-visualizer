/* eslint-disable  no-explicit-any */
const logger = require('./logger')

const requestLogger = (req: any, _res: any, next: any) => {
	logger.info('Method:', req.method)
	logger.info('Path:  ', req.path)
	logger.info('Body:  ', req.body)
	logger.info('---')
	next()
}

const unknownEndpoint = (_req: any, res: any) => {
	res.status(404).send({ error: 'unknown endpoint' })
}


const errorHandler = (err: any, _req: any, res: any, next: any) => {
	if (!err) next()

	logger.error(err.message)

	if (err.name === 'CastError') {
		return res.status(400).send({ error: 'malformatted id' })
	}

	next(err)
}

module.exports = {
	requestLogger,
	unknownEndpoint,
	errorHandler,
}