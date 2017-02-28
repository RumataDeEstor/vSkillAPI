// import Context from '../models/context';
//
//
// export function createContext(req, res) {
//   const newContext = new Context({
//     title: req.body.title,
//   });
//
//   newContext.save((err, context) => {
//     if (err) {
//       res.send(err);
//     } else {
//       res.send(context._id);
//     }
//   });
// }
//
//
// export function updateContext(req, res) {
//   Context.findOneAndUpdate({ _id: req.params.id }, req.body, (err, context) => {
//     if (err) {
//       res.send(err);
//     } else if (context) {
//       res.sendStatus(200);
//     } else {
//       const error = new Error();
//       error.message = `Context with _id=${req.params.id} not found`;
//       error.name = 'ParseError';
//       res.send(error);
//     }
//   });
// }
//
//
// export function removeContext(req, res) {
//   Context.findOneAndRemove({ _id: req.params.id }, (err, context) => {
//     if (err) {
//       res.send(err);
//     } else if (context) {
//       res.sendStatus(200);
//     } else {
//       const error = new Error();
//       error.message = `Context with _id=${req.params.id} not found`;
//       error.name = 'ParseError';
//       res.send(error);
//     }
//   });
// }
//
//
// export function findAllContexts(req, res) {
//   Context.find({}, (err, contexts) => {
//     if (err) {
//       res.send(err);
//     } else {
//       res.send(contexts);
//     }
//   });
// }
//
// export function findContextsByIds(req, res) {
//   Context.find({ _id: { $in: req.body.contextsId } }, (err, contexts) => {
//     if (err) {
//       res.send(err);
//     } else {
//       res.send(contexts);
//     }
//   });
// }
