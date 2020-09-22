const express = require('express');
const app = express();
app.use(express.static('public'));
const routes = require('./routes');
app.use(routes);
app.listen(3000, () => console.log(`server started at http://localhost:3000`));
