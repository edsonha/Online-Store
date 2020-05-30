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

Firestore will always return us these two objects, even if nothing exists at from the query:

1. Query References - an object that represents the "current" place in the database that we are querying. We use this reference object to tell firestore whether to save
   data to this place inside of our database or to get data from this location in the database. So it has properties that tell us details about it, or the method to get the Snapshot object which gives us the data we are looking for.

   DocumentReference vs CollectionReference:

   - use documentRef objects to perform our CRUD methods: .set(), .get(), .update() and .delete()
   - add documents to collections using the collectionRef using .add() method. // collectionRef.add({ value: property })
   - get snapshotObject from the referenceObject using the .get() method. ie documentRef.get() or collectionRef.get()
   - documentRef return a documentSnapshot object
   - collectionRef return a querySnapshot object

2. Query Snapshots
   - DocumentSnapshot - object that we get from documentReference object. It allows us to check if a document exists at this query using the .exists property which return a boolean. We can also get the actual properties on the object by calling the .data() method which return a JSON object of the document

## Sign Up New User

Don't forget to enable the email/password sign-in method in firebase website

## Pushing to Heroku

Things to note:

1. heroku create \${UNIQUE_APP_NAME} --buildpack mars/create-react-app
2. Add heroku domain in the firebase to authorized to do google sign-in
3. Erase the logger middleware when in production environment
