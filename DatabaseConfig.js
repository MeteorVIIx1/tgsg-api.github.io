require('dotenv').config();

//-----------------------------------------------------------

const { SQLSERVER_USER,
        SQLSERVER_PASSWORD,
        SQLSERVER_SERVER,
        SQLSERVER_DATABASE,
        SQLSERVER_OPTIONS_TRUSTEDCONNECTION,
        SQLSERVER_OPTIONS_ENABLEARITHAORT,
        SQLSERVER_OPTIONS_INSANCENAME
    } = process.env;


const config = {
    user: `${SQLSERVER_USER}`,
    password: `${SQLSERVER_PASSWORD}`,
    server: `${SQLSERVER_SERVER}`,
    database: `${SQLSERVER_DATABASE}`,
    options:{
        encrypt: false,
        trustedconnection: `${SQLSERVER_OPTIONS_TRUSTEDCONNECTION}`,
        enableArithAort: `${SQLSERVER_OPTIONS_ENABLEARITHAORT}`,
        instancename: `${SQLSERVER_OPTIONS_INSANCENAME}`
    },
    port: process.env.PORT
}

//-----------------------------------------------------------

module.exports = config;