import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    const [projects, setProjects] = useState([]);
    const [clients, setClients] = useState([]);

    // Form States
    const [contactForm, setContactForm] = useState({ fullName: '', email: '', mobile: '', city: '' });
    const [contactStatus, setContactStatus] = useState('');

    const [subEmail, setSubEmail] = useState('');
    const [subStatus, setSubStatus] = useState('');

    useEffect(() => {
        fetchProjects();
        fetchClients();
    }, []);

    const fetchProjects = async () => {
        try { const res = await axios.get('/api/projects'); setProjects(res.data); }
        catch (e) { console.error("Failed to fetch projects"); }
    };

    const fetchClients = async () => {
        try { const res = await axios.get('/api/clients'); setClients(res.data); }
        catch (e) { console.error("Failed to fetch clients"); }
    };

    const handleContactSubmit = async (e) => {
        e.preventDefault();
        setContactStatus('Sending...');
        try {
            await axios.post('/api/contact', contactForm);
            setContactStatus('Message sent successfully!');
            setContactForm({ fullName: '', email: '', mobile: '', city: '' });
        } catch (e) {
            setContactStatus('Error sending message.');
        }
    };

    const handleSubscribe = async (e) => {
        e.preventDefault();
        if (!subEmail) return;
        setSubStatus('Subscribing...');
        try {
            await axios.post('/api/subscribe', { email: subEmail });
            setSubStatus('Subscribed!');
            setSubEmail('');
        } catch (e) {
            setSubStatus('Subscription failed (maybe already subscribed?)');
        }
    };

    return (
        <div>
            {/* Navbar */}
            <nav style={{ padding: '1rem 0', borderBottom: '1px solid var(--border)' }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)' }}>Agency.</div>
                    <div>
                        <Link to="/admin" className="btn">Admin Panel</Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <header style={{ padding: '8rem 0', textAlign: 'center', background: 'radial-gradient(circle at center, #1e293b 0%, #0f172a 100%)' }}>
                <h1 className="section-title" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>We Build The Future</h1>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
                    Premium web solutions for your business growth. Responsive, dynamic, and beautiful.
                </p>
                <a href="#contact" className="btn btn-primary" style={{ padding: '0.75rem 2rem', fontSize: '1.1rem' }}>Get in Touch</a>
            </header>

            <div className="container">
                {/* Projects Section */}
                <section id="projects" style={{ padding: '4rem 0' }}>
                    <h2 className="section-title">Our Projects</h2>
                    {projects.length === 0 ? <p style={{ textAlign: 'center' }}>No projects yet. Add some in the Admin Panel.</p> : (
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                            {projects.map(project => (
                                <div key={project._id} className="card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                                    <img src={project.image} alt={project.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                                    <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{project.name}</h3>
                                        <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', flex: 1 }}>{project.description}</p>
                                        <button className="btn btn-primary" style={{ alignSelf: 'start', opacity: 0.8, cursor: 'not-allowed' }}>Read More</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </section>

                {/* Clients Section */}
                <section id="clients" style={{ padding: '4rem 0' }}>
                    <h2 className="section-title">Happy Clients</h2>
                    {clients.length === 0 ? <p style={{ textAlign: 'center' }}>No clients yet.</p> : (
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                            {clients.map(client => (
                                <div key={client._id} className="card" style={{ textAlign: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
                                    <img src={client.image} alt={client.name} style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', marginBottom: '1rem', border: '3px solid var(--primary)' }} />
                                    <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', color: 'var(--text-muted)' }}>"{client.description}"</p>
                                    <h4 style={{ fontWeight: 700 }}>{client.name}</h4>
                                    <span style={{ fontSize: '0.9rem', color: 'var(--primary)' }}>{client.designation}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </section>

                {/* Contact Section */}
                <section id="contact" style={{ padding: '4rem 0' }}>
                    <h2 className="section-title">Contact Us</h2>
                    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                        <form className="card" onSubmit={handleContactSubmit}>
                            <h3 style={{ marginBottom: '1rem' }}>Send us a message</h3>
                            <input
                                type="text" placeholder="Full Name" value={contactForm.fullName}
                                onChange={e => setContactForm({ ...contactForm, fullName: e.target.value })} required
                            />
                            <input
                                type="email" placeholder="Email Address" value={contactForm.email}
                                onChange={e => setContactForm({ ...contactForm, email: e.target.value })} required
                            />
                            <input
                                type="text" placeholder="Mobile Number" value={contactForm.mobile}
                                onChange={e => setContactForm({ ...contactForm, mobile: e.target.value })} required
                            />
                            <input
                                type="text" placeholder="City" value={contactForm.city}
                                onChange={e => setContactForm({ ...contactForm, city: e.target.value })} required
                            />

                            <button className="btn btn-primary" type="submit" style={{ width: '100%' }}>Submit</button>
                            {contactStatus && <p style={{ marginTop: '1rem', textAlign: 'center', color: 'var(--primary)' }}>{contactStatus}</p>}
                        </form>
                    </div>
                </section>

                {/* Newsletter Section */}
                <section id="newsletter" style={{ padding: '4rem 0', textAlign: 'center', background: 'var(--surface)', margin: '0 -1rem', borderRadius: 'var(--radius)' }}>
                    <div className="container">
                        <h2 className="section-title" style={{ marginBottom: '1rem' }}>Subscribe to our Newsletter</h2>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Stay updated with our latest projects and offers.</p>
                        <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '1rem', justifyContent: 'center', maxWidth: '500px', margin: '0 auto', flexWrap: 'wrap' }}>
                            <input
                                type="email" placeholder="Enter your email" value={subEmail}
                                onChange={e => setSubEmail(e.target.value)} required
                                style={{ flex: 1, minWidth: '250px', marginBottom: 0 }}
                            />
                            <button className="btn btn-primary" type="submit">Subscribe</button>
                        </form>
                        {subStatus && <p style={{ marginTop: '1rem', color: 'var(--primary)' }}>{subStatus}</p>}
                    </div>
                </section>

                {/* Footer */}
                <footer style={{ padding: '2rem 0', textAlign: 'center', borderTop: '1px solid var(--border)', color: 'var(--text-muted)' }}>
                    <p>&copy; 2024 Agency. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
};

export default LandingPage;

