var azure = require('ms-rest-azure');
var arm = require('azure-arm-resource');
var promise = require('bluebird');

var options = {
    spnname: process.env.FUNCTION_APP_SPNAME,
    spsecret: process.env.FUNCTION_APP_SPSECRET,
    sptenant: process.env.FUNCTION_APP_SPTENANT,
    subscription: process.env.FUNCTION_APP_SUBSCRIPTION
}

var _cached = null;

var refreshLogin = function() {
    if(_cached){
        return promise.resolve(_cached);
    }
    return new promise(function(resolve, reject) {
        azure.loginWithServicePrincipalSecret(options.spnname, options.spsecret, options.sptenant, function (err, credentials, subscriptions) {
            if(err) {
                reject(err);
            } else {
                resolve({credentials: credentials, subscriptions: subscriptions});
            }
        });
    })     
}

module.exports = {
    options: options,
    refreshLogin: refreshLogin,
    promise: promise
}