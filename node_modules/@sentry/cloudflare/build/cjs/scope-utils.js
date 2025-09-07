Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const core = require('@sentry/core');

/**
 * Set cloud resource context on scope.
 */
function addCloudResourceContext(scope) {
  scope.setContext('cloud_resource', {
    'cloud.provider': 'cloudflare',
  });
}

/**
 * Set culture context on scope
 */
function addCultureContext(scope, cf) {
  scope.setContext('culture', {
    timezone: cf.timezone,
  });
}

/**
 * Set request data on scope
 */
function addRequest(scope, request) {
  scope.setSDKProcessingMetadata({ normalizedRequest: core.winterCGRequestToRequestData(request) });
}

exports.addCloudResourceContext = addCloudResourceContext;
exports.addCultureContext = addCultureContext;
exports.addRequest = addRequest;
//# sourceMappingURL=scope-utils.js.map
