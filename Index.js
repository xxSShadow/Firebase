const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const Account = require('./AccountKey.json');

initializeApp({
  credential: cert(Account)
});

const Database = getFirestore();

Collection = Database.collection('GUILDS');

Document = Collection.doc('ID');

Document.set({
  Name: 'Testing'
});

Collection.get().then(Snapshot => {
  Snapshot.forEach(document => { console.log(document.data().Name) })
})
