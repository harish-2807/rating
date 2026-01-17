// Initial dummy data for the application
export const initialUsers = [
  // System Administrator
  {
    id: 1,
    name: 'Marcus Chen',
    email: 'marcus.chen@ratingapp.com',
    address: '123 Admin Plaza, Suite 100, New York, NY 10001',
    role: 'admin',
    password: 'admin123'
  },
  // Store Owners (10 stores need at least 10 owners)
  {
    id: 2,
    name: 'Zara Patel',
    email: 'zara.patel@coffeeshop.com',
    address: '456 Business Park, Austin, TX 78701',
    role: 'storeOwner',
    password: 'password123',
    storeId: 1
  },
  {
    id: 3,
    name: 'Rafael Santos',
    email: 'rafael.santos@electronics.com',
    address: '789 Commerce Street, Los Angeles, CA 90001',
    role: 'storeOwner',
    password: 'password123',
    storeId: 2
  },
  {
    id: 4,
    name: 'Luna Kim',
    email: 'luna.kim@bookstore.com',
    address: '321 Main Boulevard, Seattle, WA 98101',
    role: 'storeOwner',
    password: 'password123',
    storeId: 3
  },
  {
    id: 5,
    name: 'Connor O\'Brien',
    email: 'connor.obrien@restaurant.com',
    address: '555 Food Court, Portland, OR 97201',
    role: 'storeOwner',
    password: 'password123',
    storeId: 4
  },
  {
    id: 6,
    name: 'Aria Johnson',
    email: 'aria.johnson@fashion.com',
    address: '777 Style Avenue, Miami, FL 33101',
    role: 'storeOwner',
    password: 'password123',
    storeId: 5
  },
  {
    id: 7,
    name: 'Kai Nakamura',
    email: 'kai.nakamura@tech.com',
    address: '888 Innovation Drive, San Jose, CA 95101',
    role: 'storeOwner',
    password: 'password123',
    storeId: 6
  },
  {
    id: 8,
    name: 'Sofia Alves',
    email: 'sofia.alves@sports.com',
    address: '999 Fitness Road, Denver, CO 80201',
    role: 'storeOwner',
    password: 'password123',
    storeId: 7
  },
  {
    id: 9,
    name: 'Ethan Wright',
    email: 'ethan.wright@music.com',
    address: '111 Harmony Street, Nashville, TN 37201',
    role: 'storeOwner',
    password: 'password123',
    storeId: 8
  },
  {
    id: 10,
    name: 'Maya Sharma',
    email: 'maya.sharma@beauty.com',
    address: '222 Glamour Lane, Las Vegas, NV 89101',
    role: 'storeOwner',
    password: 'password123',
    storeId: 9
  },
  {
    id: 11,
    name: 'Noah Anderson',
    email: 'noah.anderson@home.com',
    address: '333 Decor Boulevard, Atlanta, GA 30301',
    role: 'storeOwner',
    password: 'password123',
    storeId: 10
  },
  // Normal Users (random names)
  {
    id: 12,
    name: 'Tyler Mitchell',
    email: 'tyler.mitchell@email.com',
    address: '100 Maple Drive, Chicago, IL 60601',
    role: 'user',
    password: 'password123'
  },
  {
    id: 13,
    name: 'Emma Rodriguez',
    email: 'emma.rodriguez@email.com',
    address: '200 Oak Avenue, Miami, FL 33101',
    role: 'user',
    password: 'password123'
  },
  {
    id: 14,
    name: 'Jackson Lee',
    email: 'jackson.lee@email.com',
    address: '300 Pine Street, Denver, CO 80201',
    role: 'user',
    password: 'password123'
  },
  {
    id: 15,
    name: 'Olivia Thompson',
    email: 'olivia.thompson@email.com',
    address: '400 Elm Road, Boston, MA 02101',
    role: 'user',
    password: 'password123'
  },
  {
    id: 16,
    name: 'Logan Harris',
    email: 'logan.harris@email.com',
    address: '500 Cedar Lane, Phoenix, AZ 85001',
    role: 'user',
    password: 'password123'
  },
  {
    id: 17,
    name: 'Ava Martinez',
    email: 'ava.martinez@email.com',
    address: '600 Birch Way, San Francisco, CA 94101',
    role: 'user',
    password: 'password123'
  },
  {
    id: 18,
    name: 'Lucas Brown',
    email: 'lucas.brown@email.com',
    address: '700 Willow Court, Dallas, TX 75201',
    role: 'user',
    password: 'password123'
  },
  {
    id: 19,
    name: 'Isabella White',
    email: 'isabella.white@email.com',
    address: '800 Spruce Street, Houston, TX 77001',
    role: 'user',
    password: 'password123'
  },
  {
    id: 20,
    name: 'Mason Davis',
    email: 'mason.davis@email.com',
    address: '900 Aspen Drive, Philadelphia, PA 19101',
    role: 'user',
    password: 'password123'
  },
  {
    id: 21,
    name: 'Sophia Garcia',
    email: 'sophia.garcia@email.com',
    address: '1100 Poplar Road, San Diego, CA 92101',
    role: 'user',
    password: 'password123'
  },
  {
    id: 22,
    name: 'Carter Wilson',
    email: 'carter.wilson@email.com',
    address: '1200 Cypress Avenue, Detroit, MI 48201',
    role: 'user',
    password: 'password123'
  },
  {
    id: 23,
    name: 'Mia Taylor',
    email: 'mia.taylor@email.com',
    address: '1300 Magnolia Lane, Minneapolis, MN 55401',
    role: 'user',
    password: 'password123'
  }
];

export const initialStores = [
  {
    id: 1,
    name: 'Brew & Bean Coffee Shop',
    email: 'info@brewbean.com',
    address: '456 Main Street, Austin, TX 78701',
    ownerId: 2
  },
  {
    id: 2,
    name: 'TechWorld Electronics',
    email: 'contact@techworld.com',
    address: '789 Tech Avenue, Los Angeles, CA 90001',
    ownerId: 3
  },
  {
    id: 3,
    name: 'Book Nook Store',
    email: 'hello@booknook.com',
    address: '321 Reading Boulevard, Seattle, WA 98101',
    ownerId: 4
  },
  {
    id: 4,
    name: 'The Gourmet Bistro',
    email: 'dine@thegourmet.com',
    address: '555 Food Court, Portland, OR 97201',
    ownerId: 5
  },
  {
    id: 5,
    name: 'Fashion Forward Boutique',
    email: 'style@fashionforward.com',
    address: '777 Style Avenue, Miami, FL 33101',
    ownerId: 6
  },
  {
    id: 6,
    name: 'Gadget Hub',
    email: 'support@gadgethub.com',
    address: '888 Innovation Drive, San Jose, CA 95101',
    ownerId: 7
  },
  {
    id: 7,
    name: 'FitZone Sports',
    email: 'info@fitzonesports.com',
    address: '999 Fitness Road, Denver, CO 80201',
    ownerId: 8
  },
  {
    id: 8,
    name: 'Melody Music Store',
    email: 'play@melodymusic.com',
    address: '111 Harmony Street, Nashville, TN 37201',
    ownerId: 9
  },
  {
    id: 9,
    name: 'Glamour Beauty Salon',
    email: 'beauty@glamour.com',
    address: '222 Glamour Lane, Las Vegas, NV 89101',
    ownerId: 10
  },
  {
    id: 10,
    name: 'Home Decor Plus',
    email: 'decor@homedecorplus.com',
    address: '333 Decor Boulevard, Atlanta, GA 30301',
    ownerId: 11
  }
];

export const initialRatings = [
  // Ratings for Brew & Bean Coffee Shop (Store ID: 1)
  { id: 1, userId: 12, username: 'Tyler Mitchell', storeId: 1, rating: 5, createdAt: '2024-01-15T10:00:00Z' },
  { id: 2, userId: 13, username: 'Emma Rodriguez', storeId: 1, rating: 4, createdAt: '2024-01-16T11:00:00Z' },
  { id: 3, userId: 14, username: 'Jackson Lee', storeId: 1, rating: 3, createdAt: '2024-01-17T12:00:00Z' },
  { id: 4, userId: 15, username: 'Olivia Thompson', storeId: 1, rating: 5, createdAt: '2024-01-18T09:00:00Z' },
  { id: 5, userId: 16, username: 'Logan Harris', storeId: 1, rating: 4, createdAt: '2024-01-19T14:30:00Z' },
  
  // Ratings for TechWorld Electronics (Store ID: 2)
  { id: 6, userId: 12, username: 'Tyler Mitchell', storeId: 2, rating: 5, createdAt: '2024-01-20T10:30:00Z' },
  { id: 7, userId: 13, username: 'Emma Rodriguez', storeId: 2, rating: 2, createdAt: '2024-01-21T14:15:00Z' },
  { id: 8, userId: 17, username: 'Lucas Brown', storeId: 2, rating: 4, createdAt: '2024-01-22T16:45:00Z' },
  { id: 9, userId: 18, username: 'Isabella White', storeId: 2, rating: 5, createdAt: '2024-01-23T11:20:00Z' },
  { id: 10, userId: 19, username: 'Mason Davis', storeId: 2, rating: 3, createdAt: '2024-01-24T13:00:00Z' },
  { id: 11, userId: 20, username: 'Sophia Garcia', storeId: 2, rating: 4, createdAt: '2024-01-25T09:15:00Z' },
  
  // Ratings for Book Nook Store (Store ID: 3)
  { id: 12, userId: 15, username: 'Olivia Thompson', storeId: 3, rating: 5, createdAt: '2024-01-26T10:00:00Z' },
  { id: 13, userId: 16, username: 'Logan Harris', storeId: 3, rating: 5, createdAt: '2024-01-27T15:30:00Z' },
  { id: 14, userId: 21, username: 'Carter Wilson', storeId: 3, rating: 4, createdAt: '2024-01-28T12:15:00Z' },
  { id: 15, userId: 22, username: 'Mia Taylor', storeId: 3, rating: 3, createdAt: '2024-01-29T11:00:00Z' },
  
  // Ratings for The Gourmet Bistro (Store ID: 4)
  { id: 16, userId: 12, username: 'Tyler Mitchell', storeId: 4, rating: 5, createdAt: '2024-02-01T18:00:00Z' },
  { id: 17, userId: 14, username: 'Jackson Lee', storeId: 4, rating: 4, createdAt: '2024-02-02T19:30:00Z' },
  { id: 18, userId: 17, username: 'Lucas Brown', storeId: 4, rating: 5, createdAt: '2024-02-03T20:15:00Z' },
  { id: 19, userId: 19, username: 'Mason Davis', storeId: 4, rating: 2, createdAt: '2024-02-04T17:45:00Z' },
  { id: 20, userId: 21, username: 'Carter Wilson', storeId: 4, rating: 4, createdAt: '2024-02-05T18:30:00Z' },
  
  // Ratings for Fashion Forward Boutique (Store ID: 5)
  { id: 21, userId: 13, username: 'Emma Rodriguez', storeId: 5, rating: 5, createdAt: '2024-02-06T14:00:00Z' },
  { id: 22, userId: 15, username: 'Olivia Thompson', storeId: 5, rating: 4, createdAt: '2024-02-07T15:20:00Z' },
  { id: 23, userId: 18, username: 'Isabella White', storeId: 5, rating: 5, createdAt: '2024-02-08T16:10:00Z' },
  { id: 24, userId: 20, username: 'Sophia Garcia', storeId: 5, rating: 3, createdAt: '2024-02-09T13:30:00Z' },
  { id: 25, userId: 22, username: 'Mia Taylor', storeId: 5, rating: 4, createdAt: '2024-02-10T14:45:00Z' },
  
  // Ratings for Gadget Hub (Store ID: 6)
  { id: 26, userId: 12, username: 'Tyler Mitchell', storeId: 6, rating: 4, createdAt: '2024-02-11T10:00:00Z' },
  { id: 27, userId: 14, username: 'Jackson Lee', storeId: 6, rating: 5, createdAt: '2024-02-12T11:30:00Z' },
  { id: 28, userId: 16, username: 'Logan Harris', storeId: 6, rating: 3, createdAt: '2024-02-13T12:15:00Z' },
  { id: 29, userId: 19, username: 'Mason Davis', storeId: 6, rating: 5, createdAt: '2024-02-14T09:45:00Z' },
  { id: 30, userId: 21, username: 'Carter Wilson', storeId: 6, rating: 4, createdAt: '2024-02-15T13:20:00Z' },
  
  // Ratings for FitZone Sports (Store ID: 7)
  { id: 31, userId: 13, username: 'Emma Rodriguez', storeId: 7, rating: 4, createdAt: '2024-02-16T08:00:00Z' },
  { id: 32, userId: 15, username: 'Olivia Thompson', storeId: 7, rating: 5, createdAt: '2024-02-17T09:30:00Z' },
  { id: 33, userId: 17, username: 'Lucas Brown', storeId: 7, rating: 3, createdAt: '2024-02-18T10:15:00Z' },
  { id: 34, userId: 20, username: 'Sophia Garcia', storeId: 7, rating: 4, createdAt: '2024-02-19T11:00:00Z' },
  { id: 35, userId: 22, username: 'Mia Taylor', storeId: 7, rating: 2, createdAt: '2024-02-20T12:30:00Z' },
  
  // Ratings for Melody Music Store (Store ID: 8)
  { id: 36, userId: 12, username: 'Tyler Mitchell', storeId: 8, rating: 5, createdAt: '2024-02-21T14:00:00Z' },
  { id: 37, userId: 14, username: 'Jackson Lee', storeId: 8, rating: 4, createdAt: '2024-02-22T15:20:00Z' },
  { id: 38, userId: 16, username: 'Logan Harris', storeId: 8, rating: 5, createdAt: '2024-02-23T16:10:00Z' },
  { id: 39, userId: 18, username: 'Isabella White', storeId: 8, rating: 3, createdAt: '2024-02-24T13:45:00Z' },
  { id: 40, userId: 19, username: 'Mason Davis', storeId: 8, rating: 4, createdAt: '2024-02-25T14:30:00Z' },
  { id: 41, userId: 21, username: 'Carter Wilson', storeId: 8, rating: 5, createdAt: '2024-02-26T15:00:00Z' },
  
  // Ratings for Glamour Beauty Salon (Store ID: 9)
  { id: 42, userId: 13, username: 'Emma Rodriguez', storeId: 9, rating: 5, createdAt: '2024-02-27T10:00:00Z' },
  { id: 43, userId: 15, username: 'Olivia Thompson', storeId: 9, rating: 4, createdAt: '2024-02-28T11:30:00Z' },
  { id: 44, userId: 18, username: 'Isabella White', storeId: 9, rating: 5, createdAt: '2024-03-01T12:15:00Z' },
  { id: 45, userId: 20, username: 'Sophia Garcia', storeId: 9, rating: 4, createdAt: '2024-03-02T13:00:00Z' },
  { id: 46, userId: 22, username: 'Mia Taylor', storeId: 9, rating: 3, createdAt: '2024-03-03T14:20:00Z' },
  
  // Ratings for Home Decor Plus (Store ID: 10)
  { id: 47, userId: 12, username: 'Tyler Mitchell', storeId: 10, rating: 4, createdAt: '2024-03-04T09:00:00Z' },
  { id: 48, userId: 14, username: 'Jackson Lee', storeId: 10, rating: 3, createdAt: '2024-03-05T10:30:00Z' },
  { id: 49, userId: 17, username: 'Lucas Brown', storeId: 10, rating: 5, createdAt: '2024-03-06T11:15:00Z' },
  { id: 50, userId: 19, username: 'Mason Davis', storeId: 10, rating: 4, createdAt: '2024-03-07T12:00:00Z' },
  { id: 51, userId: 21, username: 'Carter Wilson', storeId: 10, rating: 4, createdAt: '2024-03-08T13:45:00Z' },
  { id: 52, userId: 22, username: 'Mia Taylor', storeId: 10, rating: 5, createdAt: '2024-03-09T14:30:00Z' }
];
