import React, { useState } from 'react';
import './UserStoreList.css';

const UserStoreList = ({ stores, ratings, currentUser, onLogout, onRatingSubmit }) => {
  const [selectedStore, setSelectedStore] = useState(null);
  const [ratingValue, setRatingValue] = useState(0);

  const getUserRating = (storeId) => {
    const rating = ratings.find(r => r.userId === currentUser.id && r.storeId === storeId);
    return rating ? rating.rating : null;
  };

  const calculateAverageRating = (storeId) => {
    const storeRatings = ratings.filter(r => r.storeId === storeId);
    if (storeRatings.length === 0) return 0;
    const sum = storeRatings.reduce((acc, r) => acc + r.rating, 0);
    return (sum / storeRatings.length).toFixed(2);
  };

  const handleRatingClick = (store) => {
    const existingRating = getUserRating(store.id);
    setSelectedStore(store);
    setRatingValue(existingRating || 0);
  };

  const handleSubmitRating = () => {
    if (selectedStore && ratingValue >= 1 && ratingValue <= 5) {
      onRatingSubmit(selectedStore.id, ratingValue);
      setSelectedStore(null);
      setRatingValue(0);
    }
  };

  return (
    <div className="user-store-list">
      <header className="user-header">
        <h1>Store Ratings</h1>
        <div>
          <span className="user-info">Welcome, {currentUser.name}!</span>
          <button onClick={onLogout} className="btn-logout">
            Logout
          </button>
        </div>
      </header>

      <main className="user-main">
        <div className="stores-grid">
          {stores.map(store => {
            const userRating = getUserRating(store.id);
            const avgRating = calculateAverageRating(store.id);

            return (
              <div key={store.id} className="store-card">
                <h3>{store.name}</h3>
                <p className="store-address">{store.address}</p>
                <div className="rating-info">
                  <div className="rating-item">
                    <span className="rating-label">Overall Rating:</span>
                    <span className="rating-value">{avgRating} ⭐</span>
                  </div>
                  <div className="rating-item">
                    <span className="rating-label">Your Rating:</span>
                    <span className="rating-value">
                      {userRating ? `${userRating} ⭐` : 'Not rated'}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => handleRatingClick(store)}
                  className="btn-rate"
                >
                  {userRating ? 'Update Rating' : 'Rate Store'}
                </button>
              </div>
            );
          })}
        </div>

        {selectedStore && (
          <div className="rating-modal">
            <div className="rating-modal-content">
              <h2>Rate {selectedStore.name}</h2>
              <div className="rating-selector">
                {[1, 2, 3, 4, 5].map(star => (
                  <button
                    key={star}
                    className={`star-btn ${ratingValue >= star ? 'active' : ''}`}
                    onClick={() => setRatingValue(star)}
                  >
                    ⭐
                  </button>
                ))}
              </div>
              <p>Selected: {ratingValue} out of 5</p>
              <div className="modal-actions">
                <button
                  onClick={() => {
                    setSelectedStore(null);
                    setRatingValue(0);
                  }}
                  className="btn-cancel"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmitRating}
                  className="btn-submit"
                  disabled={ratingValue === 0}
                >
                  Submit Rating
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default UserStoreList;

