Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const async = require('./async.js');
const request = require('./request.js');

/**
 * Plugin middleware for Cloudflare Pages.
 *
 * Initializes the SDK and wraps cloudflare pages requests with SDK instrumentation.
 *
 * @example Simple usage
 *
 * ```javascript
 * // functions/_middleware.js
 * import * as Sentry from '@sentry/cloudflare';
 *
 * export const onRequest = Sentry.sentryPagesPlugin({
 *   dsn: process.env.SENTRY_DSN,
 *   tracesSampleRate: 1.0,
 * });
 * ```
 *
 * @example Usage with handler function to access context for environmental variables
 *
 * ```javascript
 * import * as Sentry from '@sentry/cloudflare';
 *
 * const const onRequest = Sentry.sentryPagesPlugin((context) => ({
 *   dsn: context.env.SENTRY_DSN,
 *   tracesSampleRate: 1.0,
 * })
 * ```
 *
 * @param handlerOrOptions Configuration options or a function that returns configuration options.
 * @returns A plugin function that can be used in Cloudflare Pages.
 */
function sentryPagesPlugin

(
  handlerOrOptions

,
) {
  async.setAsyncLocalStorageAsyncContextStrategy();
  return context => {
    const options = typeof handlerOrOptions === 'function' ? handlerOrOptions(context) : handlerOrOptions;
    return request.wrapRequestHandler({ options, request: context.request, context: { ...context, props: {} } }, () =>
      context.next(),
    );
  };
}

exports.sentryPagesPlugin = sentryPagesPlugin;
//# sourceMappingURL=pages-plugin.js.map
