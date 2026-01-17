import React, { useState, useEffect } from 'react';
import './App.css';
import RoleSelection from './components/RoleSelection';
import SystemAdminDashboard from './components/SystemAdmin/SystemAdminDashboard';
import UserSignup from './components/NormalUser/UserSignup';
import UserStoreList from './components/NormalUser/UserStoreList';
import StoreOwnerDashboard from './components/StoreOwner/StoreOwnerDashboard';
import { initialUsers, initialStores, initialRatings } from './data/dummyData';
import { getStoredData, setStoredData, STORAGE_KEYS } from './utils/storage';

function App() {
  const [selectedRole, setSelectedRole] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [stores, setStores] = useState([]);
  const [ratings, setRatings] = useState([]);
  const [showSignup, setShowSignup] = useState(false);

  // Initialize data from localStorage or use dummy data
  useEffect(() => {
    let storedUsers = getStoredData(STORAGE_KEYS.USERS, initialUsers);
    let storedStores = getStoredData(STORAGE_KEYS.STORES, initialStores);
    let storedRatings = getStoredData(STORAGE_KEYS.RATINGS, initialRatings);
    
    // Check if stored data is incomplete or empty, reset to dummy data if needed
    if (!storedStores || storedStores.length === 0 || storedStores.length < 10) {
      storedStores = initialStores;
      storedRatings = initialRatings;
      storedUsers = initialUsers;
      // Clear localStorage and reset with dummy data
      setStoredData(STORAGE_KEYS.STORES, initialStores);
      setStoredData(STORAGE_KEYS.RATINGS, initialRatings);
      setStoredData(STORAGE_KEYS.USERS, initialUsers);
    }
    
    const storedCurrentUser = getStoredData(STORAGE_KEYS.CURRENT_USER, null);

    setUsers(storedUsers);
    setStores(storedStores);
    setRatings(storedRatings);

    // Restore session if user was logged in
    if (storedCurrentUser) {
      setCurrentUser(storedCurrentUser);
      setSelectedRole(storedCurrentUser.role);
    }
  }, []);

  // Save data to localStorage whenever it changes
  useEffect(() => {
    setStoredData(STORAGE_KEYS.USERS, users);
  }, [users]);

  useEffect(() => {
    setStoredData(STORAGE_KEYS.STORES, stores);
  }, [stores]);

  useEffect(() => {
    setStoredData(STORAGE_KEYS.RATINGS, ratings);
  }, [ratings]);

  useEffect(() => {
    setStoredData(STORAGE_KEYS.CURRENT_USER, currentUser);
  }, [currentUser]);

  const handleRoleSelect = (role) => {
    setSelectedRole(role);

    if (role === 'normal_user' || role === 'user') {
      setShowSignup(true);
    } else if (role === 'system_admin' || role === 'admin') {
      // Find admin user or create a session
      const adminUser = users.find(u => u.role === 'system_admin' || u.role === 'admin') || {
        id: 999,
        name: 'System Administrator',
        email: 'admin@example.com',
        address: 'Admin Office',
        role: 'admin'
      };
      setCurrentUser(adminUser);
    } else if (role === 'store_owner' || role === 'storeOwner') {
      // Find first store owner or create a session
      const ownerUser = users.find(u => u.role === 'store_owner' || u.role === 'storeOwner') || {
        id: 998,
        name: 'Store Owner',
        email: 'owner@example.com',
        address: 'Store Address',
        role: 'storeOwner',
        storeId: stores.length > 0 ? stores[0].id : null
      };
      setCurrentUser(ownerUser);
    }
  };

  const handleUserSignup = (signupData) => {
    const newUser = {
      id: Math.max(...users.map(u => u.id), 0) + 1,
      ...signupData,
      role: 'user'
    };
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    setCurrentUser(newUser);
    setShowSignup(false);
  };

  const handleRatingSubmit = (storeId, ratingValue) => {
    const existingRating = ratings.find(
      r => r.userId === currentUser.id && r.storeId === storeId
    );

    let updatedRatings;
    if (existingRating) {
      // Update existing rating - include username
      updatedRatings = ratings.map(r =>
        r.id === existingRating.id
          ? { ...r, rating: ratingValue, username: currentUser.name }
          : r
      );
    } else {
      // Create new rating - include username
      const newRating = {
        id: Math.max(...ratings.map(r => r.id), 0) + 1,
        userId: currentUser.id,
        username: currentUser.name,
        storeId: storeId,
        rating: ratingValue,
        createdAt: new Date().toISOString()
      };
      updatedRatings = [...ratings, newRating];
    }

    setRatings(updatedRatings);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setSelectedRole(null);
    setShowSignup(false);
    setStoredData(STORAGE_KEYS.CURRENT_USER, null);
  };

  // Show role selection if no role is selected
  if (!selectedRole || !currentUser) {
    if (showSignup) {
      return <UserSignup onSignup={handleUserSignup} />;
    }
    return <RoleSelection onRoleSelect={handleRoleSelect} />;
  }

  // Render appropriate dashboard based on role
  if (currentUser.role === 'system_admin' || currentUser.role === 'admin') {
    return (
      <SystemAdminDashboard
        users={users}
        stores={stores}
        ratings={ratings}
        onLogout={handleLogout}
      />
    );
  }

  if (currentUser.role === 'normal_user' || currentUser.role === 'user') {
    return (
      <UserStoreList
        stores={stores}
        ratings={ratings}
        currentUser={currentUser}
        onLogout={handleLogout}
        onRatingSubmit={handleRatingSubmit}
      />
    );
  }

  if (currentUser.role === 'store_owner' || currentUser.role === 'storeOwner') {
    return (
      <StoreOwnerDashboard
        currentUser={currentUser}
        stores={stores}
        ratings={ratings}
        users={users}
        onLogout={handleLogout}
      />
    );
  }

  return <RoleSelection onRoleSelect={handleRoleSelect} />;
}

export default App;

