const express = require('express');
const app = express();
const tempRoutes = require("./routes/route.js")
var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '16mb'}));
app.use(bodyParser.urlencoded({extended: false }));
const PORT = process.env.PORT || 9001;
app.use('/api', tempRoutes)
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));