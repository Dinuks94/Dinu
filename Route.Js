const express = require('express');
const router = express.Router();
const sqlData = require('./donutdata');

module.exports = {

    getdonutdata: function () {
        return router.get('/getdonutdata/:myid', function (req, res) {
            console.log(['req',req.params.myid]);
            sqlData.getdonutdata(req, res);
        });
    },
    getdonutdata1: function () {
        return router.get('/getStackedbardata', function (req, res) {
            sqlData.getdonutdata1(req, res);
        });
    }
};
