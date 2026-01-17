# Store Rating System

A frontend-only React.js application for managing store ratings with role-based access control.

## Features

### System Administrator
- Dashboard with statistics (total users, stores, ratings)
- View and filter all users
- View and filter all stores with average ratings
- Search functionality by name, email, address, and role

### Normal User
- Signup functionality
- View all stores with overall ratings
- Submit ratings (1-5 stars) for stores
- Update previously submitted ratings
- See personal rating history

### Store Owner
- Dashboard showing store information
- Average rating display
- List of all users who rated the store with their ratings

## Technology Stack

- React 18.2.0
- React Hooks (useState, useEffect)
- localStorage for data persistence
- Pure CSS styling (no external CSS frameworks)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

The application will open in your browser at `http://localhost:3000`

## Usage

1. **Select a Role**: Choose from System Administrator, Normal User, or Store Owner
2. **System Administrator**: View statistics and manage users/stores
3. **Normal User**: Sign up, browse stores, and submit ratings
4. **Store Owner**: View store dashboard with ratings

## Data Persistence

All data (users, stores, ratings) is stored in the browser's localStorage, so your data persists across browser sessions.

## Project Structure

```
src/
  components/
    NormalUser/
      UserSignup.js
      UserSignup.css
      UserStoreList.js
      UserStoreList.css
    StoreOwner/
      StoreOwnerDashboard.js
      StoreOwnerDashboard.css
    SystemAdmin/
      SystemAdminDashboard.js
      SystemAdminDashboard.css
      UserList.js
      UserList.css
      StoreList.js
      StoreList.css
    RoleSelection.js
    RoleSelection.css
  data/
    dummyData.js
  utils/
    storage.js
  App.js
  App.css
  index.js
  index.css
```

## Notes

- No backend or API calls required
- All state management is done with React hooks
- Data is automatically saved to localStorage
- Role-based UI rendering (no authentication logic)

