const { Event } = require('../models');

exports.getEvents = async (req, res) => {
  const events = await Event.findAll({ where: { ClubId: req.params.clubId } });
  res.json(events);
};

exports.createEvent = async (req, res) => {
  const event = await Event.create({ ...req.body, ClubId: req.params.clubId });
  res.json(event);
};

exports.updateEvent = async (req, res) => {
  const event = await Event.findByPk(req.params.id);
  if (!event) return res.status(404).json({ message: 'Event not found' });
  await event.update(req.body);
  res.json(event);
};

exports.deleteEvent = async (req, res) => {
  const event = await Event.findByPk(req.params.id);
  if (!event) return res.status(404).json({ message: 'Event not found' });
  await event.destroy();
  res.json({ message: 'Event deleted' });
};
