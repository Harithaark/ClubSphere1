const express = require('express');
const {
  getEvents, createEvent, updateEvent, deleteEvent
} = require('../controllers/eventController');

const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/:clubId', auth, getEvents);
router.post('/:clubId', auth, createEvent);
router.put('/:id', auth, updateEvent);
router.delete('/:id', auth, deleteEvent);

module.exports = router;
