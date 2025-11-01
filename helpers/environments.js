/*
* Title: Uptime Monitoring Api
* Description: Environments 
* Author: Rashidul Islam
* Date: 01/11/2025
*/

//dependecies

//module scaffolding 
const environments = {}

//staging environtment
environments.staging = {
    port:3000,
    envName: 'staging'
};

//production environment
environments.production = {
    port:5000,
    envName: 'production'
};

//determine which environment was passed
const currentEnvironment =  typeof(process.env.NODE_ENV)==='string'? process.env.NODE_ENV: 'staging' ;


//export corresponding environment object
const environmentToExport= typeof(environments[currentEnvironment])==='object'? environments[currentEnvironment]:'staging';

//console.log(environmentToExport);
//export module
module.exports = environmentToExport;



