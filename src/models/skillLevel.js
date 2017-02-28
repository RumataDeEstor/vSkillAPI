import mongoose from '../utils/mongoose';

const Schema = mongoose.Schema;

const skillLevelSchema = new Schema({
  value: {
    type: Number,
    required: true,
    default: 0,
  },
  date: {
    type: Date,
    required: true, // (?)
    default: Date.now(),
  },
});

export default mongoose.model('SkillLevel', skillLevelSchema);
