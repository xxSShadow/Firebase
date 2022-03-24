const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

constAccount = require('./AccountKey.json');

initializeApp({ credential: cert(Account) });

const db = getFirestore();

docRef = db.collection('MEMBERS');

docRef.doc('alovelace');

docRef.set({ name: 'User' });
