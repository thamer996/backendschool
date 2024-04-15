// db.js
const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/school';

mongoose.connect(uri, {
  
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erreur de connexion :'));
db.once('open', () => {
  console.log('Connecté à la base de données MongoDB !');
});

module.exports = db;
