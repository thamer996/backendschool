// app.js
const express = require('express');
const mongoose = require('mongoose');
const studentRoute = require('./Routes/studentRoute'); 

const classRoute = require('./Routes/classRoute'); 
const homeworkRoute = require('./Routes/homeworkRoute'); 

const rolesRoute = require('./Routes/rolesRoute'); 
const usersRoute = require('./Routes/usersRoute'); 
const cors = require('cors');


const db = require('./db');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api', studentRoute);
app.use('/api', classRoute);
app.use('/api', homeworkRoute);
app.use('/api', rolesRoute);
app.use('/api', usersRoute);

app.use(cors());
// Start the server
const PORT = process.env.PORT || 8000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
