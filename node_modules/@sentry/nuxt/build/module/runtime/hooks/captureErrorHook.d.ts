import type { CapturedErrorContext } from 'nitropack/types';
/**
 *  Hook that can be added in a Nitro plugin. It captures an error and sends it to Sentry.
 */
export declare function sentryCaptureErrorHook(error: Error, errorContext: CapturedErrorContext): Promise<void>;
