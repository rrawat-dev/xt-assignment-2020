import express from 'express';
import reactssr from './middlewares/react.ssr';

const app = express();
app.use(express.static('public'));
app.use(express.static('assets'));
app.use(reactssr());

app.get('/api/search', (req, res) => {
  const options = {params: req.query || {}};
  return fetchNews(options).then((news) => {
    res.send(JSON.stringify(news));
  });
});

app.get('*', (req, res) => {
    res.send(
        `<!DOCTYPE html>
        <html lang="en">
            <head>
                <title>React SSR Exercise</title>
                <link rel="manifest" href="/manifest.json">
                <link rel="apple-touch-icon" href="/icon-192x192.png">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <meta name="theme-color" content="#317EFB">
                <meta name="description" content="This is a React server Side Rendered App to show feed from hacker news API.">
                ${res.react.styles}
                <script>window.__REACT_SSR_PAGE__ = "${res.react.page}";</script>
            </head>
            <body>
                <div id="root" class="App">${res.react.html}</div>
                <script>var __REACT_SSR_APP_STATE__ = ${JSON.stringify(res.react.reduxState)}</script>
                <script src="bundle.js"></script>
            </body>
        </html>
    `);
});

app.listen(process.env.PORT || 3000, () => {});