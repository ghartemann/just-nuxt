import { winterCGRequestToRequestData } from '@sentry/core';

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
  scope.setSDKProcessingMetadata({ normalizedRequest: winterCGRequestToRequestData(request) });
}

export { addCloudResourceContext, addCultureContext, addRequest };
//# sourceMappingURL=scope-utils.js.map
