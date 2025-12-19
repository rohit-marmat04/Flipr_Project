import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ContactViewer = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        fetchContacts();
    }, []);

    const fetchContacts = async () => {
        try {
            const res = await axios.get('/api/contacts');
            setContacts(res.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="card">
            <h3 style={{ marginBottom: '1.5rem' }}>Contact Submissions</h3>
            <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px' }}>
                    <thead>
                        <tr style={{ background: 'var(--background)', textAlign: 'left' }}>
                            <th style={{ padding: '1rem' }}>Name</th>
                            <th style={{ padding: '1rem' }}>Email</th>
                            <th style={{ padding: '1rem' }}>Mobile</th>
                            <th style={{ padding: '1rem' }}>City</th>
                            <th style={{ padding: '1rem' }}>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((contact) => (
                            <tr key={contact._id} style={{ borderBottom: '1px solid var(--border)' }}>
                                <td style={{ padding: '1rem' }}>{contact.fullName}</td>
                                <td style={{ padding: '1rem' }}>{contact.email}</td>
                                <td style={{ padding: '1rem' }}>{contact.mobile}</td>
                                <td style={{ padding: '1rem' }}>{contact.city}</td>
                                <td style={{ padding: '1rem' }}>{new Date(contact.createdAt).toLocaleDateString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {contacts.length === 0 && <p style={{ padding: '1rem', textAlign: 'center' }}>No contacts found.</p>}
            </div>
        </div>
    );
};

export default ContactViewer;
