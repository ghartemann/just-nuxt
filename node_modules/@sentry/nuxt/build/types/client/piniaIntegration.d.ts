/**
 * Monitor an existing Pinia store.
 *
 * This only works if "@pinia/nuxt" is added to the `modules` array.
 */
export declare const piniaIntegration: (pinia: unknown, options?: Partial<{
    attachPiniaState: boolean;
    addBreadcrumbs: boolean;
    actionTransformer: (action: string) => any;
    stateTransformer: (state: Record<string, unknown>) => any;
}> | undefined) => import("@sentry/core").Integration;
//# sourceMappingURL=piniaIntegration.d.ts.map