## Setting Up Firebase - Google Authentication

1. Add project
2. Click on Project Overview and select the Web button ( </> )
3. Register an App
4. Copy the firebaseConfig from Firebase SDK
5. npm install firebase
6. Setup firebase.utils.js
7. Go back to the website, click the Authentication and Set up sign-in method
8. Enable Google and select project support email and click Save

## Setting Up Database - Google Firestore

1. Create database on firebase website
2. Select "Start in test mode" - allow others to read and write, but we can modify the security and permission ourselves

Database Query:

- For specific document: firestore.doc('/users/:userID/cartItems/:cartItemID)
- For specific collection: firestore.collection('/users/:userID/cartItem')
