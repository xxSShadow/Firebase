const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
Account = require('./AccountKey.json');
initializeApp({ credential: cert(Account) });
Database = getFirestore();
Collection = Database.collection('GUILDS');
Collection.doc('IDS');
Collection.set({ NAME: 'TESTING' });
