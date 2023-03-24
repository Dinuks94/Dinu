const routerData = require('./Route')
const express = require('express');
const app = express();
const sql = require('msnodesqlv8');
const sqlProps = require('./sqlProps');
const cors = require('cors');

app.use(cors());
sql.open(sqlProps.connectionstring, function (err, resp) {
    if (err) {
        console.log(['err', err]);
    } else if (resp != '') {
        console.log('Database is connected');
    }
});

app.use('/api/donutdata', routerData.getdonutdata());
app.use('/api/Stackedbardata', routerData.getdonutdata1());

//
app.get('/',cors(), (req, resp) => {
    resp.send('Server is up')
})

app.listen(9002);

