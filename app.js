const express = require('express');
const { EMPTY_RESULT_ERROR, DUPLICATE_ENTRY_ERROR, TABLE_ALREADY_EXISTS_ERROR } = require('./errors');

const modulesModel = require('./models/modules');

const app = express();
app.use(express.json()); // to process JSON in request body

app.use(express.static('public'));

app.post('/modules/table', function (req, res, next) {
    return modulesModel
        .initTable()
        .then(function () {
            return res.sendStatus(201);
        })
        .catch(function (error) {
            console.error(error);
            if (error instanceof TABLE_ALREADY_EXISTS_ERROR) {
                return res.status(400).json({ error: error.message });
            }
            return res.status(500).json({ error: 'Unknown Error' });
        });
});

app.post('/modules', function (req, res, next) {
    const code = req.body.code;
    const name = req.body.name;
    const credit = req.body.credit;

    return modulesModel
        .create(code, name, credit)
        .then(function () {
            return res.sendStatus(201);
        })
        .catch(function (error) {
            console.error(error);
            if (error instanceof DUPLICATE_ENTRY_ERROR) {
                return res.status(400).json({ error: error.message });
            } else return res.status(500).json({ error: 'Unknown Error' });
        });
});

app.get('/modules/:code', function (req, res, next) {
    const code = req.params.code;

    return modulesModel
        .retrieveByCode(code)
        .then(function (module) {
            return res.json({ module: module });
        })
        .catch(function (error) {
            console.error(error);
            if (error instanceof EMPTY_RESULT_ERROR) {
                return res.status(404).json({ error: error.message });
            } else return res.status(500).json({ error: 'Unknown Error' });
        });
});

app.delete('/modules/:code', function (req, res, next) {
    // TODO: Implement Delete module by Code
});

app.put('/modules/:code', function (req, res, next) {
    // TODO: Implement Update module by Code
    //      You can decide where you want to put the Credit in the Request
});

app.get('/modules', function (req, res, next) {
    // TODO: Implement Get all modules
});

app.get('/modules/bulk', function (req, res, next) {
    // TODO: Implement bulk retrieve
});

app.post('/modules/bulk', function (req, res, next) {
    // TODO: Implement bulk insert modules
});

app.delete('/modules/bulk', function (req, res, next) {
    // TODO: Implement bulk delete modules
});

module.exports = app;
