export default function renderFullPage(html, preloadedState) {
  return `<!DOCTYPE html>
<!-- "It is in the doing of the work that we discover the work that we must do. Doing exposes reality." -->
<html lang="en-US">
<head>
  <title>HOME of David Puerto, original designer and now JavaScript developer</title>
  <link rel="icon" href="images/favicon.ico">
  <!--[if IE]>
    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
  <![endif]-->
  <meta charset="utf-8">
  <meta http-equiv="Pragma" content="no-cache">
  <meta http-equiv="Expires" content="-1">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <meta name="description" content="SpaceLab Forever, David Puerto">
  <meta name="keywords" content="SpaceLab Forever, David Puerto">
  <meta name="author" content="David Puerto, dapintial">
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
</html>`
}