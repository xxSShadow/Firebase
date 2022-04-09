const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const serviceAccount = require('./path/to/serviceAccountKey.json');

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

const docRef = db.collection('users').doc('alovelace');

docRef.set({
  first: 'Ada',
  last: 'Lovelace',
  born: 1815
});

const snapshot = db.collection('users').get();

snapshot.forEach((doc) => {
  console.log(doc.id, '=>', doc.data());
});
