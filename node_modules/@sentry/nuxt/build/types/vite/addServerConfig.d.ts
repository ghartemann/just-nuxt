import type { Nitro } from 'nitropack';
import type { SentryNuxtModuleOptions } from '../common/types';
/**
 *  Adds the `sentry.server.config.ts` file as `sentry.server.config.mjs` to the `.output` directory to be able to reference this file in the node --import option.
 *
 *  By adding a Rollup plugin to the Nitro Rollup options, the Sentry server config is transpiled and emitted to the server build.
 */
export declare function addServerConfigToBuild(moduleOptions: SentryNuxtModuleOptions, nitro: Nitro, serverConfigFile: string): void;
/**
 *  Adds the Sentry server config import at the top of the server entry file to load the SDK on the server.
 *  This is necessary for environments where modifying the node option `--import` is not possible.
 *  However, only limited tracing instrumentation is supported when doing this.
 */
export declare function addSentryTopImport(moduleOptions: SentryNuxtModuleOptions, nitro: Nitro): void;
/**
 * This function modifies the Rollup configuration to include a plugin that wraps the entry file with a dynamic import (`import()`)
 * and adds the Sentry server config with the static `import` declaration.
 *
 * With this, the Sentry server config can be loaded before all other modules of the application (which is needed for import-in-the-middle).
 * See: https://nodejs.org/api/module.html#enabling
 */
export declare function addDynamicImportEntryFileWrapper(nitro: Nitro, serverConfigFile: string, moduleOptions: Omit<SentryNuxtModuleOptions, 'experimental_entrypointWrappedFunctions'> & Required<Pick<SentryNuxtModuleOptions, 'experimental_entrypointWrappedFunctions'>>): void;
//# sourceMappingURL=addServerConfig.d.ts.map