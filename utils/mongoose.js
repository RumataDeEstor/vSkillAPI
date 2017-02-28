import mongoose from 'mongoose';
import config from '../config';

mongoose.connect(config.get('db:mongo_uri'));
const db = mongoose.connection;

db.on('error', (err) => {
  console.info('connection error:', err.message);
});

db.on('open', () => {
  console.info('Connected to DB!');
});

export default mongoose;
