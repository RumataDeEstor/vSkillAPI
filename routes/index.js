import levels from './levels';

export default function (app) {
  app.use('/api/levels', levels);
}
