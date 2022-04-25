
  
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

Account = require('./AccountKey.json');

initializeApp({
  credential: cert(Account)
});

Database = getFirestore();

Collection = Database.collection('GUILDS');
Document = Collection.doc('ID');

Document.set({
  Name: 'Testing',
  Prefix: '!'
});

Collection.get().then(Snapshot => {
  Snapshot.forEach(document => {
    Prefix = document.data().Prefix;
    console.log(`Prefix: ${Prefix}`)
  });
});
