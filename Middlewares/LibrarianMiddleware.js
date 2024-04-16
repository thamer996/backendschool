
function authorizeLibrarian(req, res, next) {
    // Vérifiez si l'utilisateur est authentifié
    if (!req.user) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    // Vérifiez si le rôle de l'utilisateur est "teacher"
    if (req.user.role !== 'Super Admin') {
        return res.status(403).json({ error: 'Forbidden' });
    }

    // Si l'utilisateur est un enseignant, passez au prochain middleware
    next();
}

module.exports = { authorizeLibrarian};
