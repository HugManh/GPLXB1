const admin = require("firebase-admin");

// Đường dẫn đúng đến service account JSON
const serviceAccount = require("../gplxfirebase.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const fs = require('fs');

const ban = JSON.parse(fs.readFileSync('./data/ban.json', 'utf8'));
const command = JSON.parse(fs.readFileSync('./data/command.json', 'utf8'));
const danger = JSON.parse(fs.readFileSync('./data/danger.json', 'utf8'));
const instruction = JSON.parse(fs.readFileSync('./data/instruction.json', 'utf8'));


(async () => {
    try {
        // Hàm push data vào collection
        const pushData = async (colName, dataArray) => {
            const colRef = db.collection('signs').doc(colName).collection('items'); // mỗi "colName" là document, có subcollection items
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
    }
})();