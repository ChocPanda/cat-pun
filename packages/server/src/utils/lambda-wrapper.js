const mambda = require('mambda');

const { jsonBodyParser, httpErrorHandler, httpHeaderNormalizer } = require('mambda/middlewares');
const optionsRequestInterceptor = require('./options-request-interceptor');

module.exports = fn => {
	const { init, handler = fn } = fn;
	return mambda({
		init,
		handler,
		middlewares: [httpHeaderNormalizer(), jsonBodyParser(), httpErrorHandler(), optionsRequestInterceptor()]
	});
};
