require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const models = require('./models/models')
const PORT = process.env.PORT || 5000;

const app = express();

const start = async () => {
  try {
    await sequelize.authenticate(); //устанавливает подклчение к базе данных
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`));
  } catch (e) {
    console.log(e)
  }
}

start();

