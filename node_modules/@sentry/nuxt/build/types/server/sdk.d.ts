import type { Client, EventProcessor } from '@sentry/core';
import type { SentryNuxtServerOptions } from '../common/types';
/**
 * Initializes the server-side of the Nuxt SDK
 *
 * @param options Configuration options for the SDK.
 */
export declare function init(options: SentryNuxtServerOptions): Client | undefined;
/**
 * Filter out transactions for resource requests which we don't want to send to Sentry
 * for quota reasons.
 *
 * Only exported for testing
 */
export declare function lowQualityTransactionsFilter(options: SentryNuxtServerOptions): EventProcessor;
/**
 * The browser devtools try to get the source maps, but as client source maps may not be available there is going to be an error (no problem for the application though).
 *
 * Only exported for testing
 */
export declare function clientSourceMapErrorFilter(options: SentryNuxtServerOptions): EventProcessor;
//# sourceMappingURL=sdk.d.ts.map