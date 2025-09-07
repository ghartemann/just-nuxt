import { debug } from "@sentry/core";
const extractionResultCache = /* @__PURE__ */ new Map();
export function extractParametrizedRouteFromContext(ssrContextModules, requestedUrl, buildTimePagesData = []) {
  if (!ssrContextModules || !requestedUrl) {
    return null;
  }
  if (buildTimePagesData.length === 0) {
    return null;
  }
  const cacheKey = Array.from(ssrContextModules).sort().join("|");
  const cachedResult = extractionResultCache.get(cacheKey);
  if (cachedResult !== void 0) {
    debug.log("Found cached result for parametrized route:", requestedUrl);
    return cachedResult;
  }
  debug.log("No parametrized route found in cache lookup. Extracting parametrized route for:", requestedUrl);
  const modulesArray = Array.from(ssrContextModules);
  const modulePagePaths = modulesArray.map((module) => {
    const filePathParts = module.split("/");
    if (filePathParts.length < 2) return null;
    const pagesFolder = filePathParts[0];
    const pageRelativePath = filePathParts.slice(1).join("/");
    return `/${pagesFolder}/${pageRelativePath}`;
  });
  for (const routeData of buildTimePagesData) {
    if (routeData.file && routeData.path) {
      const normalizedFile = routeData.file.replace(/\\/g, "/");
      if (modulePagePaths.some((filePath) => filePath && normalizedFile.endsWith(filePath))) {
        const result = { parametrizedRoute: routeData.path };
        extractionResultCache.set(cacheKey, result);
        return result;
      }
    }
  }
  extractionResultCache.set(cacheKey, null);
  return null;
}
