/*
* Title: Uptime Monitoring Api
* Description: Sample Handler
* Author: Rashidul Islam
* Date: 29/10/2025
*/

//module scaffolding
const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
    console.log(requestProperties);

    callback(200, {
        message: 'This is a sample url',
    });
};


module.exports = handler;