import bodyParser from 'body-parser';
import morgan from 'morgan';
import router from '../routes';

function addMiddleware(app) {
  app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));
  app.use(bodyParser.json());
  app.use(morgan('dev'));

  router(app);
}

export default addMiddleware;
