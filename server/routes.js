const express = require('express');
const router = express.Router();
const { Project, Client, Contact, Subscriber } = require('./models');

// --- PROJECTS ---
// Get all projects
router.get('/projects', async (req, res) => {
    try {
        const projects = await Project.find().sort({ createdAt: -1 });
        res.json(projects);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Add a project
router.post('/projects', async (req, res) => {
    try {
        const { name, description, image } = req.body;
        const newProject = new Project({ name, description, image });
        await newProject.save();
        res.status(201).json(newProject);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// --- CLIENTS ---
// Get all clients
router.get('/clients', async (req, res) => {
    try {
        const clients = await Client.find().sort({ createdAt: -1 });
        res.json(clients);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Add a client
router.post('/clients', async (req, res) => {
    try {
        const { name, description, designation, image } = req.body;
        const newClient = new Client({ name, description, designation, image });
        await newClient.save();
        res.status(201).json(newClient);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// --- CONTACT FORMS ---
// Submit contact form
router.post('/contact', async (req, res) => {
    try {
        const { fullName, email, mobile, city } = req.body;
        const newContact = new Contact({ fullName, email, mobile, city });
        await newContact.save();
        res.status(201).json({ message: 'Contact saved successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get all contacts (Admin)
router.get('/contacts', async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        res.json(contacts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// --- SUBSCRIBERS ---
// Subscribe to newsletter
router.post('/subscribe', async (req, res) => {
    try {
        const { email } = req.body;
        // Check if exists
        const exists = await Subscriber.findOne({ email });
        if (exists) return res.status(400).json({ message: 'Email already subscribed' });

        const newSub = new Subscriber({ email });
        await newSub.save();
        res.status(201).json({ message: 'Subscribed successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get all subscribers (Admin)
router.get('/subscribers', async (req, res) => {
    try {
        const subs = await Subscriber.find().sort({ createdAt: -1 });
        res.json(subs);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
