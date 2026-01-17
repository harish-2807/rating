import React, { useState } from 'react';
import './RoleSelection.css';

const RoleSelection = ({ onRoleSelect }) => {
  const [selectedRole, setSelectedRole] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedRole) {
      onRoleSelect(selectedRole);
    }
  };

  return (
    <div className="role-selection">
      <div className="role-selection-card">
        <h1>Store Rating System</h1>
        <p>Select your role to continue:</p>
        <form onSubmit={handleSubmit}>
          <div className="role-options">
            <label>
              <input
                type="radio"
                value="system_admin"
                checked={selectedRole === 'system_admin'}
                onChange={(e) => setSelectedRole(e.target.value)}
              />
              <span>System Administrator</span>
            </label>
            <label>
              <input
                type="radio"
                value="normal_user"
                checked={selectedRole === 'normal_user'}
                onChange={(e) => setSelectedRole(e.target.value)}
              />
              <span>Normal User</span>
            </label>
            <label>
              <input
                type="radio"
                value="store_owner"
                checked={selectedRole === 'store_owner'}
                onChange={(e) => setSelectedRole(e.target.value)}
              />
              <span>Store Owner</span>
            </label>
          </div>
          <button type="submit" className="btn-primary">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default RoleSelection;

