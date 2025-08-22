const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { sequelize } = require('./models');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/clubs', require('./routes/clubRoutes'));
app.use('/api/events', require('./routes/eventRoutes'));

sequelize.sync({ alter: true }).then(() => {
  console.log("✅ DB Synced");
  app.listen(process.env.PORT, () => {
    console.log(`🚀 Server running on port ${process.env.PORT}`);
  });
});
