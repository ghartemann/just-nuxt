Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const core = require('@sentry/core');

/**
 * Stack line parser for Cloudflare Workers.
 * This wraps node stack parser and adjusts root paths to match with source maps.
 *
 */
function workersStackLineParser(getModule) {
  const [arg1, arg2] = core.nodeStackLineParser(getModule);

  const fn = line => {
    const result = arg2(line);
    if (result) {
      const filename = result.filename;
      // Workers runtime runs a single bundled file that is always in a virtual root
      result.abs_path = filename !== undefined && !filename.startsWith('/') ? `/${filename}` : filename;
      // There is no way to tell what code is in_app and what comes from dependencies (node_modules), since we have one bundled file.
      // So everything is in_app, unless an error comes from runtime function (ie. JSON.parse), which is determined by the presence of filename.
      result.in_app = filename !== undefined;
    }
    return result;
  };

  return [arg1, fn];
}

/**
 * Gets the module from filename.
 *
 * @param filename
 * @returns Module name
 */
function getModule(filename) {
  if (!filename) {
    return;
  }

  // In Cloudflare Workers there is always only one bundled file
  return core.basename(filename, '.js');
}

/** Cloudflare Workers stack parser */
const defaultStackParser = core.createStackParser(workersStackLineParser(getModule));

exports.defaultStackParser = defaultStackParser;
exports.getModule = getModule;
//# sourceMappingURL=stacktrace.js.map
