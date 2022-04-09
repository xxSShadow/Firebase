const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const serviceAccount = require('./AccountKey.json');

initializeApp({
  credential: cert(serviceAccount)
});

const Database = getFirestore();

const Collection = Database.collection('users');
Collection.doc('alovelace');

Collection.set({
  first: 'Ada',
  last: 'Lovelace',
  born: 1815
});
