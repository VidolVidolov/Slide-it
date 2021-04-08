const express = require('express');
// const config = require('./config/expressConfig');
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

app.listen(process.env.NODE_ENV || 5001, () =>
    console.log(`SERVER LISTENING ON PORT ${5001}...`)
);
