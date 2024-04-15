// rolesController.js
const Role = require('../Models/roles');

// Controller to add a new role
async function addRole(req, res) {
    try {
        const { name } = req.body;

        // Check if the role already exists
        const existingRole = await Role.findOne({ name });
        if (existingRole) {
            return res.status(400).json({ error: 'Role already exists' });
        }

        // Create a new role
        const newRole = new Role({ name });
        await newRole.save();

        return res.status(201).json(newRole);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = { addRole };