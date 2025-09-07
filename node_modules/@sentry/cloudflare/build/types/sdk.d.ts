import type { Integration } from '@sentry/core';
import type { CloudflareOptions } from './client';
import { CloudflareClient } from './client';
/** Get the default integrations for the Cloudflare SDK. */
export declare function getDefaultIntegrations(options: CloudflareOptions): Integration[];
/**
 * Initializes the cloudflare SDK.
 */
export declare function init(options: CloudflareOptions): CloudflareClient | undefined;
//# sourceMappingURL=sdk.d.ts.map