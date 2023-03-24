const sql = require('msnodesqlv8');
const sqlProps = require('./sqlProps');

const getdonutdata = (req, resp) => {
    const sourceId = req.params.myid;
    const donutchart = 'Select  IsEnabled_ID,Completed_Package from [EDW_Report] where Sourceid =' + sourceId + ' and Report_date = cast(GETDATE() -1 as date) '
    sql.query(sqlProps.connectionstring, donutchart, (err, result) => {
        if (err) {
            return resp.status(404).json('Something went wrong');
        } else {
            return resp.status(200).json(result);
        }
    })
};
//stack bar data
const getdonutdata1 = (req, resp) => {
    const donutchart = 'Select Sourceid,IsEnabled_ID,Completed_Package  from [EDW_Report] where  Report_date = cast(GETDATE() -1    as date)'
    sql.query(sqlProps.connectionstring, donutchart, (err, result) => {
        if (err) {
            return resp.status(404).json('Something went wrong');
        } else {
            return resp.status(200).json(result);
        }
    })
};
module.exports = { getdonutdata, getdonutdata1 };