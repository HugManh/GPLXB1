const admin = require("firebase-admin");
const fs = require('fs');
const path = require('path');

// Prefer env JSON for CI/CD; fallback to local JSON file if present
function loadServiceAccount() {
    const fromEnv = process.env.GPLX_FIREBASE_SERVICE_ACCOUNT_JSON;
    if (fromEnv) {
        try {
            return JSON.parse(fromEnv);
        } catch (e) {
            throw new Error("Invalid GPLX_FIREBASE_SERVICE_ACCOUNT_JSON. Must be valid JSON string.");
        }
    }

    const candidatePath = path.resolve(__dirname, "../gplxfirebase.json");
    if (fs.existsSync(candidatePath)) {
        const raw = fs.readFileSync(candidatePath, 'utf8');
        try {
            return JSON.parse(raw);
        } catch (e) {
            throw new Error("gplxfirebase.json exists but is invalid JSON.");
        }
    }

    throw new Error("Service account credentials not found. Set GPLX_FIREBASE_SERVICE_ACCOUNT_JSON or provide gplxfirebase.json.");
}

const serviceAccount = loadServiceAccount();

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const ban = JSON.parse(fs.readFileSync(path.resolve(__dirname, './data/ban.json'), 'utf8'));
const command = JSON.parse(fs.readFileSync(path.resolve(__dirname, './data/command.json'), 'utf8'));
const danger = JSON.parse(fs.readFileSync(path.resolve(__dirname, './data/danger.json'), 'utf8'));
const instruction = JSON.parse(fs.readFileSync(path.resolve(__dirname, './data/instruction.json'), 'utf8'));

(async () => {
    try {
        const pushData = async (colName, dataArray) => {
            const colRef = db.collection('signs').doc(colName).collection('items');
            for (const item of dataArray) {
                if (item.id) {
                    await colRef.doc(item.id.toString()).set(item);
                } else {
                    await colRef.add(item);
                }
            }
        };

        await pushData('ban', ban);
        await pushData('command', command);
        await pushData('danger', danger);
        await pushData('instruction', instruction);

        console.log('All data pushed into signs collection!');
    } catch (err) {
        console.error(err);
        process.exitCode = 1;
    }
})();