const express = require('express');
const cors = require('cors');
require('dotenv').config();

const restaurantRoutes = require('./src/routes/restaurantsRoutes');

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.use('/api', restaurantRoutes);


app.get('/', (req, res) => {
  res.send('Welcome to foof delivery API');
});

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
