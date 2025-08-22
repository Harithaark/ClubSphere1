const bcrypt = require('bcryptjs');
const { User } = require('../models');
const generateToken = require('../utils/generateToken');

exports.register = async (req, res) => {
  const { name, email, password, role, ClubId } = req.body;
  try {
    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashed, role, ClubId });
    const token = generateToken(user);
    res.json({ token, user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.password)))
      return res.status(401).json({ message: 'Invalid credentials' });
    const token = generateToken(user);
    res.json({ token, user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
  console.log("🔐 Login request:", req.body);
const user = await User.findOne({ where: { email } });
console.log("🔍 Fetched user:", user);

};
