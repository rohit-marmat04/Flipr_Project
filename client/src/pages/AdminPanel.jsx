import React, { useState } from 'react';
import ProjectManager from '../components/admin/ProjectManager';
import ClientManager from '../components/admin/ClientManager';
import ContactViewer from '../components/admin/ContactViewer';
import SubscriberViewer from '../components/admin/SubscriberViewer';

const AdminPanel = () => {
    const [activeTab, setActiveTab] = useState('projects');

    const renderTab = () => {
        switch (activeTab) {
            case 'projects': return <ProjectManager />;
            case 'clients': return <ClientManager />;
            case 'contacts': return <ContactViewer />;
            case 'subscribers': return <SubscriberViewer />;
            default: return <div>Select a tab</div>;
        }
    };

    return (
        <div style={{ display: 'flex', minHeight: '100vh' }}>
            {/* Sidebar */}
            <aside style={{ width: '250px', background: 'var(--surface)', padding: '2rem', borderRight: '1px solid var(--border)' }}>
                <h2 style={{ marginBottom: '2rem', fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary)' }}>Admin Panel</h2>
                <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <button
                        className={`btn ${activeTab === 'projects' ? 'btn-primary' : ''}`}
                        style={{ justifyContent: 'flex-start', background: activeTab === 'projects' ? '' : 'transparent' }}
                        onClick={() => setActiveTab('projects')}
                    >
                        Projects
                    </button>
                    <button
                        className={`btn ${activeTab === 'clients' ? 'btn-primary' : ''}`}
                        style={{ justifyContent: 'flex-start', background: activeTab === 'clients' ? '' : 'transparent' }}
                        onClick={() => setActiveTab('clients')}
                    >
                        Clients
                    </button>
                    <button
                        className={`btn ${activeTab === 'contacts' ? 'btn-primary' : ''}`}
                        style={{ justifyContent: 'flex-start', background: activeTab === 'contacts' ? '' : 'transparent' }}
                        onClick={() => setActiveTab('contacts')}
                    >
                        Contact Forms
                    </button>
                    <button
                        className={`btn ${activeTab === 'subscribers' ? 'btn-primary' : ''}`}
                        style={{ justifyContent: 'flex-start', background: activeTab === 'subscribers' ? '' : 'transparent' }}
                        onClick={() => setActiveTab('subscribers')}
                    >
                        Subscribers
                    </button>
                    <hr style={{ margin: '1rem 0', borderColor: 'var(--border)' }} />
                    <a href="/" className="btn" style={{ justifyContent: 'flex-start', textDecoration: 'none', color: 'var(--text-muted)' }}>
                        ← Back to Home
                    </a>
                </nav>
            </aside>

            {/* Main Content */}
            <main style={{ flex: 1, padding: '2rem', overflowY: 'auto' }}>
                <div className="container">
                    {renderTab()}
                </div>
            </main>
        </div>
    );
};

export default AdminPanel;
