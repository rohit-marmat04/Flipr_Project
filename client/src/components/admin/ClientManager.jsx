import React, { useState } from 'react';
import axios from 'axios';
import { convertToBase64 } from '../../utils/imageHandler';

const ClientManager = () => {
    const [formData, setFormData] = useState({ name: '', description: '', designation: '', image: '' });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (file) {
            const base64 = await convertToBase64(file);
            setFormData({ ...formData, image: base64 });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await axios.post('/api/clients', formData);
            setMessage('Client added successfully!');
            setFormData({ name: '', description: '', designation: '', image: '' });
        } catch (error) {
            setMessage('Error adding client');
            console.error(error);
        }
        setLoading(false);
    };

    return (
        <div className="card">
            <h3 style={{ marginBottom: '1.5rem' }}>Add Happy Client</h3>
            {message && <div style={{ marginBottom: '1rem', color: message.includes('Error') ? 'red' : 'green' }}>{message}</div>}
            <form onSubmit={handleSubmit}>
                <label>Client Name</label>
                <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                />

                <label>Designation</label>
                <input
                    type="text"
                    value={formData.designation}
                    onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                    placeholder="e.g. CEO, Developer"
                    required
                />

                <label>Testimonial / Description</label>
                <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    required
                    rows="4"
                />

                <label>Client Image</label>
                <input type="file" onChange={handleImageUpload} accept="image/*" required />
                {formData.image && <img src={formData.image} alt="Preview" style={{ width: '100px', height: '100px', objectFit: 'cover', marginTop: '1rem', borderRadius: '50%' }} />}

                <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem' }} disabled={loading}>
                    {loading ? 'Adding...' : 'Add Client'}
                </button>
            </form>
        </div>
    );
};

export default ClientManager;
