const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const Account = require('./AccountKey.json');
initializeApp({ credential: cert(Account) });
Database = getFirestore();
Collection = Database.collection('MEMBERS');
Collection.doc('ID');
Collection.set({ NAME: 'USERNAME' });
