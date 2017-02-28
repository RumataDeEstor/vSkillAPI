import SkillLevel from '../models/skillLevel';

export function getAllLevels(req, res) {
  SkillLevel.find({}, (err, levels) => {
    if (err) {
      res.send(err);
    } else {
      res.send(levels);
    }
  });
}

export function addLevel(req, res) {
  const newLevel = new SkillLevel({
    value: req.body.value,
    date: Date.now(),
  });

  newLevel.save((err, level) => {
    if (err) {
      res.send(err);
    } else {
      res.send(level._id);
    }
  });
}
