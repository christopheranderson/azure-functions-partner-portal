/// <reference path="../../node_modules/azure-arm-resource/lib/subscription/subscriptionClient.d.ts" />

import * as azure from 'ms-rest-azure'
import * as arm from 'azure-arm-resource'
import * as promise from 'bluebird'

let options = {
    spnname: process.env.FUNCTION_APP_SPNAME,
    spsecret: process.env.FUNCTION_APP_SPSECRET,
    sptenant: process.env.FUNCTION_APP_SPTENANT,
    subscription: process.env.FUNCTION_APP_SUBSCRIPTION
}

let _cached = null;

let refreshLogin = function() {
    if(_cached){
        return promise.resolve(_cached);
    }
    return new promise((resolve, reject) => {
        azure.loginWithServicePrincipalSecret(options.spnname, options.spsecret, options.sptenant, function (err, credentials, subscriptions) {
            if(err) {
                reject(err);
            } else {
                resolve({credentials: credentials, subscriptions: subscriptions});
            }
        });
    })     
}

angular.
    module('commonAzure').
    component('commonAzure', {
        options: options,
        refreshLogin: refreshLogin
    });
