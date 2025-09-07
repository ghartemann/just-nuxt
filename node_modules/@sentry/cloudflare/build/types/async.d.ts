/**
 * Sets the async context strategy to use AsyncLocalStorage.
 *
 * AsyncLocalStorage is only available in the cloudflare workers runtime if you set
 * compatibility_flags = ["nodejs_compat"] or compatibility_flags = ["nodejs_als"]
 *
 * @internal Only exported to be used in higher-level Sentry packages
 * @hidden Only exported to be used in higher-level Sentry packages
 */
export declare function setAsyncLocalStorageAsyncContextStrategy(): void;
//# sourceMappingURL=async.d.ts.map