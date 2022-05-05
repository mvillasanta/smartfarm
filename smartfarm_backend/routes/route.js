var express = require('express');
var router = express.Router();
var dbConn = require('../db');

router.get('/lastwatered', (req, res) => {
    sqlQuery = 'SELECT * FROM project where watered = 1 ORDER BY date DESC LIMIT 1'
    dbConn.query(sqlQuery, function(
        error,
        results,
        fields
    ) {
        if (error) throw error;
        res.status(200).json(results);
    });
});

router.post('/addentry', (req, res) => {

    var timestamp = Date.now();
    let date_ob = new Date(timestamp);
    let date = date_ob.getDate();
    let month = date_ob.getMonth() + 1;
    let year = date_ob.getFullYear();
    if (month.length = 1){
        month = "0"+month;
    }
    let dateformat = (year + "-" + month + "-" + date);

    var moisture = req.body.moisture;
    var deviceId = req.body.deviceId;
    var watered = req.body.watered;

    // connect to mysql database and perform INSERT Query
    sqlQuery = `INSERT INTO project (moisture, deviceId, date, watered) VALUES (${moisture}, ${deviceId}, "${dateformat}", ${watered})`
    dbConn.query(sqlQuery, function(error, results, fields) {
        if (error) throw error;
        res.status(200).json(results);
    });
});

module.exports = router;