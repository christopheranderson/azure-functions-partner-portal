import * as arm  from 'azure-arm-resource'

import * as utils from '../bin/lib/common-azure.ts'
import { Context } from '../bin/lib/common-functions.ts'

export = (context: Context, data) => {
    utils
        .refreshLogin()
        .then((identity) => {
            let client = new arm.ResourceManagementClient(identity.credentials, utils.options.subscription);
            client.resources
                .list((err, result) => {
                    if (err) console.log(err);
                    context.log(result);
                    context.done(null, null);
                });
        });
}