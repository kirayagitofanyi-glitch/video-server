const admin = require("firebase-admin");

let db;

function initializeFirebase(serviceAccount) {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    });
  }

  db = admin.firestore();

  console.log("🔥 Firebase Admin Connected");

  return db;
}

function getDb() {
  if (!db) {
    throw new Error("Firebase not initialized");
  }

  return db;
}

module.exports = {
  initializeFirebase,
  getDb,
  admin
};
