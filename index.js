const fallback = require('express-history-api-fallback');
const express = require('express');

const app = express();

const root = `${__dirname}/dist`;
app.use(express.static(root));
app.use(fallback('index.html', { root }));

/* eslint-disable no-console */
app.listen(8000, () => console.log('listening on port 8000'));
/* eslint-enable no-console */
