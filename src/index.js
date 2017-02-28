import express from 'express';
// import config from './config';
import addMiddleware from './middleware';

const port = process.env.PORT || 8080;
const app = express();

addMiddleware(app);

app.listen(port, () => {
  console.info(`Listening on port ${port}`);
});
