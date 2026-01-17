import React, { useState } from 'react';
import './StoreList.css';

const StoreList = ({ stores, ratings }) => {
  const [filters, setFilters] = useState({
    name: '',
    email: '',
    address: ''
  });

  const calculateAverageRating = (storeId) => {
    const storeRatings = ratings.filter(r => r.storeId === storeId);
    if (storeRatings.length === 0) return 0;
    const sum = storeRatings.reduce((acc, r) => acc + r.rating, 0);
    return (sum / storeRatings.length).toFixed(2);
  };

  const filteredStores = stores.filter(store => {
    return (
      store.name.toLowerCase().includes(filters.name.toLowerCase()) &&
      store.email.toLowerCase().includes(filters.email.toLowerCase()) &&
      store.address.toLowerCase().includes(filters.address.toLowerCase())
    );
  });

  return (
    <div className="store-list">
      <div className="filters">
        <h2>Stores List</h2>
        <div className="filter-inputs">
          <input
            type="text"
            placeholder="Filter by Store Name"
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
        </div>
      </div>

      <div className="stores-table-container">
        <table className="stores-table">
          <thead>
            <tr>
              <th>Store Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Average Rating</th>
            </tr>
          </thead>
          <tbody>
            {filteredStores.length === 0 ? (
              <tr>
                <td colSpan="4" className="no-data">No stores found</td>
              </tr>
            ) : (
              filteredStores.map(store => (
                <tr key={store.id}>
                  <td>{store.name}</td>
                  <td>{store.email}</td>
                  <td>{store.address}</td>
                  <td>
                    <span className="rating-badge">
                      {calculateAverageRating(store.id)} ⭐
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StoreList;

