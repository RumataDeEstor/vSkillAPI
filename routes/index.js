// import users from './users';

// export default function (app) {
//   app.use('/api/users', users);
// }

export default function (app) {
  app.use('/api/users', (req, res) => res.send('users!'));
}
