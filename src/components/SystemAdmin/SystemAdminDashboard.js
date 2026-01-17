import React, { useState } from 'react';
import './SystemAdminDashboard.css';
import UserList from './UserList';
import StoreList from './StoreList';

const SystemAdminDashboard = ({ users, stores, ratings, onLogout }) => {
  const [activeView, setActiveView] = useState('dashboard');

  const totalUsers = users.length;
  const totalStores = stores.length;
  const totalRatings = ratings.length;

  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <h1>System Administrator Dashboard</h1>
        <button onClick={onLogout} className="btn-logout">
          Logout
        </button>
      </header>

      <nav className="admin-nav">
        <button
          onClick={() => setActiveView('dashboard')}
          className={activeView === 'dashboard' ? 'active' : ''}
        >
          Dashboard
        </button>
        <button
          onClick={() => setActiveView('users')}
          className={activeView === 'users' ? 'active' : ''}
        >
          Users
        </button>
        <button
          onClick={() => setActiveView('stores')}
          className={activeView === 'stores' ? 'active' : ''}
        >
          Stores
        </button>
      </nav>

      <main className="admin-main">
        {activeView === 'dashboard' && (
          <div className="dashboard-stats">
            <div className="stat-card">
              <h2>Total Users</h2>
              <p className="stat-number">{totalUsers}</p>
            </div>
            <div className="stat-card">
              <h2>Total Stores</h2>
              <p className="stat-number">{totalStores}</p>
            </div>
            <div className="stat-card">
              <h2>Total Ratings</h2>
              <p className="stat-number">{totalRatings}</p>
            </div>
          </div>
        )}

        {activeView === 'users' && (
          <UserList users={users} />
        )}

        {activeView === 'stores' && (
          <StoreList stores={stores} ratings={ratings} />
        )}
      </main>
    </div>
  );
};

export default SystemAdminDashboard;

