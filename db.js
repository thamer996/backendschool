// db.js
const mongoose = require('mongoose');

const uri = 'mongodb+srv://school:school@cluster0.qcq1mws.mongodb.net/school?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(uri, {
  
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erreur de connexion :'));
db.once('open', () => {
  console.log('Connecté à la base de données MongoDB !');
});

module.exports = db;
