import React, { useState } from 'react';
import './UserList.css';

const UserList = ({ users }) => {
  const [filters, setFilters] = useState({
    name: '',
    email: '',
    address: '',
    role: ''
  });

  const filteredUsers = users.filter(user => {
    return (
      user.name.toLowerCase().includes(filters.name.toLowerCase()) &&
      user.email.toLowerCase().includes(filters.email.toLowerCase()) &&
      user.address.toLowerCase().includes(filters.address.toLowerCase()) &&
      (filters.role === '' || 
       user.role === filters.role ||
       (filters.role === 'admin' && user.role === 'system_admin') ||
       (filters.role === 'user' && user.role === 'normal_user') ||
       (filters.role === 'storeOwner' && user.role === 'store_owner'))
    );
  });

  const getRoleDisplayName = (role) => {
    const roleMap = {
      'system_admin': 'System Administrator',
      'admin': 'System Administrator',
      'normal_user': 'Normal User',
      'user': 'Normal User',
      'store_owner': 'Store Owner',
      'storeOwner': 'Store Owner'
    };
    return roleMap[role] || role;
  };

  return (
    <div className="user-list">
      <div className="filters">
        <h2>Users List</h2>
        <div className="filter-inputs">
          <input
            type="text"
            placeholder="Filter by Name"
            value={filters.name}
            onChange={(e) => setFilters({ ...filters, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Filter by Email"
            value={filters.email}
            onChange={(e) => setFilters({ ...filters, email: e.target.value })}
          />
          <input
            type="text"
            placeholder="Filter by Address"
            value={filters.address}
            onChange={(e) => setFilters({ ...filters, address: e.target.value })}
          />
          <select
            value={filters.role}
            onChange={(e) => setFilters({ ...filters, role: e.target.value })}
          >
            <option value="">All Roles</option>
            <option value="admin">System Administrator</option>
            <option value="system_admin">System Administrator (Legacy)</option>
            <option value="user">Normal User</option>
            <option value="normal_user">Normal User (Legacy)</option>
            <option value="storeOwner">Store Owner</option>
            <option value="store_owner">Store Owner (Legacy)</option>
          </select>
        </div>
      </div>

      <div className="users-table-container">
        <table className="users-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length === 0 ? (
              <tr>
                <td colSpan="4" className="no-data">No users found</td>
              </tr>
            ) : (
              filteredUsers.map(user => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.address}</td>
                  <td>{getRoleDisplayName(user.role)}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;

