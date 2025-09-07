import { debug, getActiveSpan, getRootSpan, SEMANTIC_ATTRIBUTE_SENTRY_SOURCE } from "@sentry/core";
import { defineNuxtPlugin } from "nuxt/app";
import { extractParametrizedRouteFromContext } from "../utils/route-extraction.js";
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hooks.hook("app:rendered", async (renderContext) => {
    let buildTimePagesData;
    try {
      const { default: importedPagesData } = await import("#build/sentry--nuxt-pages-data.mjs");
      buildTimePagesData = importedPagesData || [];
      debug.log("Imported build-time pages data:", buildTimePagesData);
    } catch (error) {
      buildTimePagesData = [];
      debug.warn("Failed to import build-time pages data:", error);
    }
    const ssrContext = renderContext.ssrContext;
    const routeInfo = extractParametrizedRouteFromContext(
      ssrContext?.modules,
      ssrContext?.url || ssrContext?.event._path,
      buildTimePagesData
    );
    if (routeInfo === null) {
      return;
    }
    const activeSpan = getActiveSpan();
    if (activeSpan && routeInfo.parametrizedRoute) {
      const rootSpan = getRootSpan(activeSpan);
      if (!rootSpan) {
        return;
      }
      debug.log("Matched parametrized server route:", routeInfo.parametrizedRoute);
      rootSpan.setAttributes({
        [SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "route",
        "http.route": routeInfo.parametrizedRoute
      });
    }
  });
});
