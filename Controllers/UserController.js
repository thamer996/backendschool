// usersController.js
const bcrypt = require('bcryptjs');
const User = require('../Models/users');
const uuid = require('uuid');

// Controller to add a new user
async function addUser(req, res) {
    try {
        const { name, email, password, role, mobileNumber, panNumber } = req.body;

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user with hashed password
        const newUser = new User({ name, email, password: hashedPassword, role, mobileNumber, panNumber });
        await newUser.save();

        return res.status(201).json(newUser);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}

// Controller for user login
async function loginUser(req, res) {
    try {
        const { email, password } = req.body;

        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Compare the password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid password' });
        }

        // Generate a unique token
        const token = uuid.v4();

        // Save the token to the user model
        user.token = token;
        await user.save();

        // Return the token in the response
        return res.status(200).json({ token });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}

async function logoutUser(req, res) {
    try {
        // Obtenez l'utilisateur à partir du jeton d'authentification
        const user = req.user;

        // Réinitialiser le champ token de l'utilisateur
        user.token = null;

        // Enregistrez les modifications dans la base de données
        await user.save();

        // Répondre avec un message de succès
        return res.status(200).json({ message: 'Logout successful' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = { loginUser, addUser, logoutUser };
