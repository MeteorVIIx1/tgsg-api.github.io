var dbconfig = require('./DatabaseConfig.js');
const sql = require('mssql');

//-----------------------------------------------------------

async function checkLogin(check) {

    try {
        let pool = await sql.connect(dbconfig);
        let checklogin = await pool.request()
            .input('Username', sql.NVarChar, check.Username)
            .input('Password', sql.NVarChar, check.Password)
            .execute('TGSG_usp_Mobile_CheckLogin');
        return checklogin.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}


async function visitCalendar(visit) {

    try {
        let pool = await sql.connect(dbconfig);
        let visitcalendar = await pool.request()
            .input('CompanyID', sql.Int, visit.CompanyID)
            .input('MarketGrpID', sql.VarChar, visit.MarketGrpID)
            .input('TGSGempID', sql.VarChar, visit.TGSGempID)
            .execute('TGSG_usp_Mobile_VisitGetDataCalendar');
        return visitcalendar.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}

//-----------------------------------------------------------

module.exports = {
    checkLogin : checkLogin,
    visitCalendar : visitCalendar
}