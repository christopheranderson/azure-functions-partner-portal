var f = require('./index.js');

var context = {
    log: function(message) {
        console.log(message);
    },
    done: function(err, results) {
        if(err) {
            console.log(err);
        } else {
            console.log(results);
        }
    }
}

f(context);