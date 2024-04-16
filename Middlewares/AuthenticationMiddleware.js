const User = require('../Models/users');

async function authenticateUser(req, res, next) {
    // Récupérer le token d'authentification de l'en-tête Authorization
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Unauthorized: Missing or invalid token' });
    }
    const token = authHeader.split(' ')[1];

    try {
        // Rechercher l'utilisateur correspondant dans la base de données
        const user = await User.findOne({ token });
        if (!user) {
            return res.status(401).json({ error: 'Unauthorized: User not found or invalid token' });
        }
        
        // Attribuer l'utilisateur à l'objet de requête (req.user)
        req.user = user;
        next();
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = authenticateUser;
