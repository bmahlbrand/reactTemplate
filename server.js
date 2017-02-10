const express = require('express');
const app = express();
const path = require('path');
const config = require('./config.js');

app.use('*', (req, res) => {
	res.sendFile(path.join(__dirname, req.url));
});

app.listen(config.port, () => {
    console.log(config.appname, ' is live at Port:', config.port);
});
