# Phase 10: PWA preparation

The app uses the native service-worker API without a new dependency or Vite plugin. Vite copies the public manifest, worker, offline page, and icons into dist. Registration runs only in production, after window load. The existing favicon's terminal mark and #4A56E3 branding are reused in opaque PNG icons (192, 512, maskable 512, Apple 180). The mark fits inside the maskable safe zone.

## Cache and update contract

- Only seven fixed public resources are precached: offline.html, favicon.svg, manifest.webmanifest, and four PNG icons. Install fetches omit credentials.
- Navigations use the network, falling back to a standalone public offline page only when the fetch fails. Navigation responses, OAuth query strings, the React shell, compiled app bundles, course assets, APIs, avatars, and remote fonts are never written to Cache Storage by this worker.
- Cross-origin requests (including Supabase), non-GET requests, and requests with Authorization headers bypass the worker. Query-bearing asset requests bypass the static allowlist. Existing Supabase session storage/refresh and account-scoped exam draft behavior are unchanged.
- This is an offline notice, not offline learning or an offline write queue. An already-open React page can still show its existing in-memory state; it retains its existing network-error behavior. The worker does not guarantee saving offline actions.
- No skipWaiting, clients.claim, forced refresh, or background sync. Updated workers activate after existing controlled windows close. Reload/reopen after first installation to obtain a controlled page. Bump CACHE_NAME in public/sw.js whenever any precached file changes. Only old caches with this app's specific prefix are deleted.
- Service-worker registration failures do not block the online app. Offline fallback requires one successful online installation; browser storage eviction can remove it.

## Deployment

For the existing Express/Render web service: keep `npm run build` and `npm start`. Public files are served before the SPA catch-all. HTML, worker, offline page and manifest revalidate via Cache-Control: no-cache. BrowserRouter direct paths and OAuth callback query strings still receive index.html. Production must use HTTPS and serve at the origin root, as before.

If using a Render Static Site instead, publish dist, retain `/*` → `/index.html` as a **rewrite**, and configure no-cache response headers for /sw.js, /index.html, /offline.html and /manifest.webmanifest. Real public assets must retain their actual MIME types. No Render dashboard configuration or live deployment was changed or inspected in this task.

## Verification and manual tests

Automated: `npx tsc --noEmit`, `npm run build`, then `npm run verify:pwa`. The last command checks built manifest metadata, PNG dimensions, mocked worker lifecycle/fetch behavior and cache isolation, plus real HTTP routes/MIME/cache headers using the production Express server on port 4319. It is not a real-browser installability audit.

1. Run `npm run build` then `npm start`; visit http://localhost:3000. Vite dev intentionally does not register the worker. Use a separate origin/port or unregister the worker if returning to dev on the same origin.
2. In Chrome/Edge DevTools → Application, inspect Manifest (icons, identity, standalone, no errors), Service Workers and Cache Storage. Wait for activation and reload once. Confirm exactly the seven public cache entries, with no user data.
3. Use the address-bar install icon or browser menu Install app. Launch it standalone, refresh /profile and /review, and directly open a nested lesson URL. Repeat on the HTTPS production URL. Android: Chrome menu → Install app/Add to Home screen. iPhone/iPad: Safari Share → Add to Home Screen; keep Open as Web App enabled when offered. Launch the new icon and verify its title, icon and standalone layout. A phone cannot use your computer's localhost; use the HTTPS deployment for device tests.
4. Verify email login, Google login and callback, logout/account switch, session refresh, profile/avatar, Favorites/Wiederholen, progress, statistics/streaks, Fehlertraining, Prüfungsmodus and Smart Review. Inspect Cache Storage again after both accounts. Installed-app session handling, especially Google redirects on iOS, must also be checked on real devices.
5. After the page is controlled, enable offline mode and reload a deep route. Expect the German offline notice with no account data. Reconnect and press Erneut versuchen; the original URL should load. Confirm offline actions on an already-open page are not mistaken for successful server saves.
6. For an update test, bump the cache version in a disposable local edit, rebuild and trigger Update in DevTools. Keep an old controlled window open: the replacement should wait without interrupting it. Close all app tabs/windows, reopen, and verify activation and deletion of only the previous FISI public cache. Revert the disposable edit afterward.

No dependencies, course content, auth configuration or secrets were changed. src/index.css retained its pre-task bytes. The build regenerated tsconfig.tsbuildinfo, which was already modified and tracked before this task; *.tsbuildinfo is now ignored for future untracked build-info files. Ignore rules do not untrack existing files: keep the current generated change out of any future commit. No commit, push or deployment was performed.

References: [MDN installability](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable), [WebKit home-screen apps](https://webkit.org/blog/17333/webkit-features-in-safari-26-0/), [Render SPA rewrites](https://render.com/docs/redirects-rewrites).
