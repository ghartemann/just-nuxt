Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const node_async_hooks = require('node:async_hooks');
const core = require('@sentry/core');

// Need to use node: prefix for cloudflare workers compatibility
// Note: Because we are using node:async_hooks, we need to set `node_compat` in the wrangler.toml

/**
 * Sets the async context strategy to use AsyncLocalStorage.
 *
 * AsyncLocalStorage is only available in the cloudflare workers runtime if you set
 * compatibility_flags = ["nodejs_compat"] or compatibility_flags = ["nodejs_als"]
 *
 * @internal Only exported to be used in higher-level Sentry packages
 * @hidden Only exported to be used in higher-level Sentry packages
 */
function setAsyncLocalStorageAsyncContextStrategy() {
  const asyncStorage = new node_async_hooks.AsyncLocalStorage

();

  function getScopes() {
    const scopes = asyncStorage.getStore();

    if (scopes) {
      return scopes;
    }

    // fallback behavior:
    // if, for whatever reason, we can't find scopes on the context here, we have to fix this somehow
    return {
      scope: core.getDefaultCurrentScope(),
      isolationScope: core.getDefaultIsolationScope(),
    };
  }

  function withScope(callback) {
    const scope = getScopes().scope.clone();
    const isolationScope = getScopes().isolationScope;
    return asyncStorage.run({ scope, isolationScope }, () => {
      return callback(scope);
    });
  }

  function withSetScope(scope, callback) {
    const isolationScope = getScopes().isolationScope.clone();
    return asyncStorage.run({ scope, isolationScope }, () => {
      return callback(scope);
    });
  }

  function withIsolationScope(callback) {
    const scope = getScopes().scope;
    const isolationScope = getScopes().isolationScope.clone();
    return asyncStorage.run({ scope, isolationScope }, () => {
      return callback(isolationScope);
    });
  }

  function withSetIsolationScope(isolationScope, callback) {
    const scope = getScopes().scope;
    return asyncStorage.run({ scope, isolationScope }, () => {
      return callback(isolationScope);
    });
  }

  // In contrast to the browser, we can rely on async context isolation here
  function suppressTracing(callback) {
    return withScope(scope => {
      scope.setSDKProcessingMetadata({ __SENTRY_SUPPRESS_TRACING__: true });
      return callback();
    });
  }

  core.setAsyncContextStrategy({
    suppressTracing,
    withScope,
    withSetScope,
    withIsolationScope,
    withSetIsolationScope,
    getCurrentScope: () => getScopes().scope,
    getIsolationScope: () => getScopes().isolationScope,
  });
}

exports.setAsyncLocalStorageAsyncContextStrategy = setAsyncLocalStorageAsyncContextStrategy;
//# sourceMappingURL=async.js.map
