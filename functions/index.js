const moment = require('moment-timezone');
const admin = require('firebase-admin');
const cors = require("cors");

const { v4: uuidv4 } = require('uuid');

var serviceAccount = require('./cybersecuritycourse-eaf81-047ef8463fa1.json');

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
const { onRequest, onCall } = require('firebase-functions/v2/https');
const logger = require('firebase-functions/logger');
const functions = require('firebase-functions');

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

const corsHandler = cors({ origin: true });

exports.createUser3 = functions.https.onRequest((req, res) => {
    corsHandler(req, res, async () => {
        try {
            if (req.method !== 'POST') {
                return res.status(405).send({ error: 'Method not allowed' });
            }

            const { accepted, email, password, name } = req.body;

            if (accepted === true) {
                return res.status(403).send({ error: 'permission-denied', message: 'Permission denied!' });
            }

            const batch = db.batch();

            // Criar o usuário no Firebase Authentication
            const userRecord = await admin.auth().createUser({
                email: email,
                password: password,
            });

            // Criar o objeto do usuário
            const timestamp = Date.now();
            const user = {
                id: userRecord.uid,
                name: name,
                email: email,
                accepted: false,
                createdAt: timestamp,
                updatedAt: timestamp,
                profile: 1,
            };

            // Adicionar ao Firestore
            const userRef = db.collection("users").doc(user.id);
            batch.set(userRef, user);
            await batch.commit();

            return res.status(200).send({ status: 200, body: user });
        } catch (error) {
            console.error(error);
            return res.status(500).send({ status: 500, body: { error: error.message } });
        }
    });
});