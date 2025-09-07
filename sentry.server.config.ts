import * as Sentry from "@sentry/nuxt";
 
Sentry.init({
  dsn: "https://66af7f1295c8445846b80e11693adcc1@o4508459558567936.ingest.de.sentry.io/4509084582871120",

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
  
  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
