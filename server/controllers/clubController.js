const { Club, User } = require('../models');

exports.getClubs = async (req, res) => {
  const clubs = await Club.findAll({ include: User });
  res.json(clubs);
};

exports.createClub = async (req, res) => {
  const club = await Club.create(req.body);
  res.json(club);
};

exports.updateClub = async (req, res) => {
  const { id } = req.params;
  const club = await Club.findByPk(id);
  if (!club) return res.status(404).json({ message: 'Club not found' });
  await club.update(req.body);
  res.json(club);
};

exports.deleteClub = async (req, res) => {
  const { id } = req.params;
  const club = await Club.findByPk(id);
  if (!club) return res.status(404).json({ message: 'Club not found' });
  await club.destroy();
  res.json({ message: 'Club deleted' });
};
