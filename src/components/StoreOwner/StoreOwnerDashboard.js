import React from 'react';
import './StoreOwnerDashboard.css';

const StoreOwnerDashboard = ({ currentUser, stores, ratings, users, onLogout }) => {
  const userStore = stores.find(store => store.ownerId === currentUser.id);

  const calculateAverageRating = () => {
    if (!userStore) return '0.00';
    const storeRatings = ratings.filter(r => r.storeId === userStore.id);
    if (storeRatings.length === 0) return '0.00';
    const sum = storeRatings.reduce((acc, r) => acc + r.rating, 0);
    return (sum / storeRatings.length).toFixed(2);
  };

  const getStoreRatings = () => {
    if (!userStore) return [];
    return ratings.filter(r => r.storeId === userStore.id);
  };

  const getUserName = (rating) => {
    // Prefer username from rating if available, otherwise lookup from users
    if (rating.username) {
      return rating.username;
    }
    const user = users.find(u => u.id === rating.userId);
    return user ? user.name : 'Unknown User';
  };

  const storeRatings = getStoreRatings();
  const avgRating = calculateAverageRating();

  return (
    <div className="owner-dashboard">
      <header className="owner-header">
        <h1>Store Owner Dashboard</h1>
        <button onClick={onLogout} className="btn-logout">
          Logout
        </button>
      </header>

      <main className="owner-main">
        {userStore ? (
          <>
            <div className="store-info-card">
              <h2>Store Information</h2>
              <div className="info-item">
                <span className="info-label">Store Name:</span>
                <span className="info-value">{userStore.name}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Email:</span>
                <span className="info-value">{userStore.email}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Address:</span>
                <span className="info-value">{userStore.address}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Average Rating:</span>
                <span className="info-value rating-highlight">{avgRating} ⭐</span>
              </div>
            </div>

            <div className="ratings-section">
              <h2>Store Ratings</h2>
              {storeRatings.length === 0 ? (
                <p className="no-ratings">No ratings yet. Be the first to get customers rating your store!</p>
              ) : (
                <div className="ratings-list">
                  {storeRatings.map(rating => (
                    <div key={rating.id} className="rating-item">
                      <div className="rating-header">
                        <span className="user-name">{getUserName(rating)}</span>
                        <span className="rating-stars">
                          {Array(rating.rating).fill('⭐').join('')}
                        </span>
                      </div>
                      <div className="rating-value">
                        Rating: {rating.rating} out of 5
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="no-store-message">
            <p>No store associated with your account.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default StoreOwnerDashboard;

