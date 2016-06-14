var arm = require('azure-arm-resource');

var utils = require('../bin/lib/common-azure.js');

module.exports = function (context, data) {
    utils.refreshLogin().then(function(identity){
        var client = new arm.ResourceManagementClient(identity.credentials, utils.options.subscription);
        client.resources.list(function (err, result) {
            if (err) console.log(err);
            console.log(result);
        });
    });
}