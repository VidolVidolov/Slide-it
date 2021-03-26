const express = require('express');
const app = express();
require('./config/mongoose')();
const cors = require('cors');
const router = require('./router');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');
const certificateFirebase = require('./config/firebase');

admin.initializeApp({
    credential: admin.credential.cert(certificateFirebase),
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(router);

app.listen(4000, () => console.log('SERVER LISTENING ON PORT 4000...'));
