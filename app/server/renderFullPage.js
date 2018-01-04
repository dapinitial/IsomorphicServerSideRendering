export default function renderFullPage(html, preloadedState) {
  return `
    <!doctype html>
    <html>
    <head>
      <title>Your SSR React Router Node App initialized with data using React!</title>
    </head>
    <body>
      <div id="root">${html}</div>
      <script type="text/javascript">
      // WARNING: See the following for security issues around embedding JSON in HTML:
      // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
      window.__PRELOADED_STATE__ = 
      ${JSON
    .stringify(preloadedState)
    .replace(/</g, '\\u003c')}
      </script>
      <script src="/bundle.js"></script>
    </body>
    </html>
  `
}