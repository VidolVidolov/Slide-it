const express = require('express');
const app = express();
require('./config/mongoose')();
const router = require('./router');
app.use(router);

app.listen(4000, () => console.log('SERVER LISTENING ON PORT 4000...'));
