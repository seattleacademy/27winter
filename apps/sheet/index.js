var alexa = require('alexa-app');
var gsjson = require('google-spreadsheet-to-json');

// Allow this module to be reloaded by hotswap when changed
module.change_code = 1;

// Define an alexa-app
var app = new alexa.app('sheet');

function sayCell(req, res) {
    gsjson({
            spreadsheetId: '1OIqHIHb1WQ9cn4jCDtb7k8nm4HJ3gJkZNPW5s9Wln08',
            listOnly: true,

            // other options...
        })
        .then(function(result) {
            num = res.session('num');
            console.log(num, result.length, "result", result);
            if (num < result.length) {
                res.shouldEndSession(false);
                res.say(num + " is " + result[num][0]);
            } else {
                res.say("You have reached the end of the list");
            }
            res.send();
        })
        .catch(function(err) {
            console.log("error", err.message);
            res.say("There was a sheet error " + err.message);
            res.send();
        });
}

app.launch(function(req, res) {
    res.session('num', 0);
    sayCell(req, res);
    return false;
});
app.intent('CommandIntent', {
    "slots": { "COMMAND": "LITERAL" },
    "utterances": ["{next|previous|exit|COMMAND}}"]
}, function(req, res) {
    console.log("command", req.slot('COMMAND'))
    num = res.session('num');
    num = num + 1;
    res.session('num', num)
    sayCell(req, res);
    return false;
});
module.exports = app;
