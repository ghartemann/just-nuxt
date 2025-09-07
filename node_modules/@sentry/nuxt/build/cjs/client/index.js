Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const vue = require('@sentry/vue');
const sdk = require('./sdk.js');
const piniaIntegration = require('./piniaIntegration.js');
const vueIntegration = require('./vueIntegration.js');



exports.init = sdk.init;
exports.piniaIntegration = piniaIntegration.piniaIntegration;
exports.vueIntegration = vueIntegration.vueIntegration;
Object.prototype.hasOwnProperty.call(vue, '__proto__') &&
	!Object.prototype.hasOwnProperty.call(exports, '__proto__') &&
	Object.defineProperty(exports, '__proto__', {
		enumerable: true,
		value: vue['__proto__']
	});

Object.keys(vue).forEach(k => {
	if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) exports[k] = vue[k];
});
//# sourceMappingURL=index.js.map
