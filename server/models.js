const mongoose = require('mongoose');

// Project Schema
const ProjectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true } // Base64 string
}, { timestamps: true });

// Client Schema
const ClientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    designation: { type: String, required: true },
    image: { type: String, required: true } // Base64 string
}, { timestamps: true });

// Contact Schema
const ContactSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true },
    city: { type: String, required: true }
}, { timestamps: true });

// Subscriber Schema
const SubscriberSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true }
}, { timestamps: true });

module.exports = {
    Project: mongoose.model('Project', ProjectSchema),
    Client: mongoose.model('Client', ClientSchema),
    Contact: mongoose.model('Contact', ContactSchema),
    Subscriber: mongoose.model('Subscriber', SubscriberSchema)
};
