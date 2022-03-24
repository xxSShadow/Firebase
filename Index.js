const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const Account = require('./AccountKey.json');

initializeApp({ credential: cert(Account) });

const Database = getFirestore();

Collection = Database.collection('MEMBERS');

Collection.doc('alovelace');

Collection.set({ name: 'User' });
