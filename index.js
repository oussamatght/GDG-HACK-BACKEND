require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const { connectDB } = require('./models/User');

const authRoutes = require('./routes/auth');
const gameRoutes = require('./routes/game');

app.use(cors());
app.use(express.json());

// connect to DB
connectDB();

// Allow specific origins in production
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://gdg-hack-frontend.vercel.app/', 'http://localhost:3000']
    : '/',
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/game', gameRoutes);

app.get('/', (req, res) => {
  res.send('GDG Hack Backend is running');
});

const PORT = process.env.PORT || 3000;

// start server only when run directly (not when required by tests)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

  process.on('unhandledRejection', (err) => {
    console.error('Unhandled rejection:', err);
  });
}

module.exports = app;

