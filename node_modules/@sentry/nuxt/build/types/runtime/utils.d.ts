import type { Context, SerializedTraceData } from '@sentry/core';
import type { CapturedErrorContext } from 'nitropack/types';
import type { NuxtRenderHTMLContext } from 'nuxt/app';
import type { ComponentPublicInstance } from 'vue';
/**
 *  Extracts the relevant context information from the error context (H3Event in Nitro Error)
 *  and created a structured context object.
 */
export declare function extractErrorContext(errorContext: CapturedErrorContext | undefined): Context;
/**
 * Adds Sentry tracing <meta> tags to the returned html page.
 *
 * Exported only for testing
 */
export declare function addSentryTracingMetaTags(head: NuxtRenderHTMLContext['head'], traceData?: SerializedTraceData): void;
/**
 *  Reports an error to Sentry. This function is similar to `attachErrorHandler` in `@sentry/vue`.
 *  The Nuxt SDK does not register an error handler, but uses the Nuxt error hooks to report errors.
 *
 *  We don't want to use the error handling from `@sentry/vue` as it wraps the existing error handler, which leads to a 500 error: https://github.com/getsentry/sentry-javascript/issues/12515
 */
export declare function reportNuxtError(options: {
    error: unknown;
    instance?: ComponentPublicInstance | null;
    info?: string;
}): void;
//# sourceMappingURL=utils.d.ts.map