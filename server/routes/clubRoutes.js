const express = require('express');
const {
  getClubs, createClub, updateClub, deleteClub
} = require('../controllers/clubController');

const auth = require('../middleware/authMiddleware');
const role = require('../middleware/roleMiddleware');

const router = express.Router();

router.get('/', auth, getClubs);
router.post('/', auth, role('admin'), createClub);
router.put('/:id', auth, role('admin'), updateClub);
router.delete('/:id', auth, role('admin'), deleteClub);

module.exports = router;
