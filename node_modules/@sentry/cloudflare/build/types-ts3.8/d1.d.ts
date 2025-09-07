import { D1Database } from '@cloudflare/workers-types';
/**
 * Instruments Cloudflare D1 bindings with Sentry.
 *
 * Currently, only prepared statements are instrumented. `db.exec` and `db.batch` are not instrumented.
 *
 * @example
 *
 * ```js
 * // env.DB is the D1 DB binding configured in your `wrangler.toml`
 * const db = instrumentD1WithSentry(env.DB);
 * // Now you can use the database as usual
 * await db.prepare('SELECT * FROM table WHERE id = ?').bind(1).run();
 * ```
 */
export declare function instrumentD1WithSentry(db: D1Database): D1Database;
//# sourceMappingURL=d1.d.ts.map
