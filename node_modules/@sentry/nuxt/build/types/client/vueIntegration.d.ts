import type { VueIntegrationOptions } from '@sentry/vue';
type Options = Omit<VueIntegrationOptions, 'app' | 'Vue'>;
export type GlobalObjWithIntegrationOptions = {
    _sentryNuxtVueIntegrationOptions?: Options;
};
/**
 * Add additional error and span instrumentation specialized for Vue.
 */
export declare const vueIntegration: (options?: Options | undefined) => import("@sentry/core").Integration;
export {};
//# sourceMappingURL=vueIntegration.d.ts.map