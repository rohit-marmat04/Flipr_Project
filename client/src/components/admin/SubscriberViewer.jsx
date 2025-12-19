import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SubscriberViewer = () => {
    const [subscribers, setSubs] = useState([]);

    useEffect(() => {
        fetchSubs();
    }, []);

    const fetchSubs = async () => {
        try {
            const res = await axios.get('/api/subscribers');
            setSubs(res.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="card">
            <h3 style={{ marginBottom: '1.5rem' }}>Newsletter Subscribers</h3>
            <ul style={{ listStyle: 'none' }}>
                {subscribers.map((sub) => (
                    <li key={sub._id} style={{ padding: '1rem', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between' }}>
                        <span>{sub.email}</span>
                        <span style={{ color: 'var(--text-muted)' }}>{new Date(sub.createdAt).toLocaleDateString()}</span>
                    </li>
                ))}
            </ul>
            {subscribers.length === 0 && <p style={{ padding: '1rem', textAlign: 'center' }}>No subscribers yet.</p>}
        </div>
    );
};

export default SubscriberViewer;
