var alexa = require('alexa-app');
var gsjson = require('google-spreadsheet-to-json');

// Allow this module to be reloaded by hotswap when changed
module.change_code = 1;

// Define an alexa-app
var app = new alexa.app('sheet');
app.launch(function(req, res) {
    gsjson({
            spreadsheetId: '1S8j1cilWy5hGujyGqRC9KhrxLKsMqJLTcy2NflM-z0c',
            listOnly: true,

            // other options...
        })
        .then(function(result) {
            console.log("result", result.length, result);
            res.say("these are the spreadsheet results " + result[0][0]);
            res.send();
        })
        .catch(function(err) {
            console.log("error", err.message);
            res.say("There was a sheet error " + err.message);
            res.send();
        });
    return false;
});
app.intent('CommandIntent', {
    "slots": { "COMMAND": "LITERAL" },
    "utterances": ["{hello|goodbye|COMMAND}}"]
}, function(req, res) {
    res.say('You Said ' + req.slot('COMMAND'));
});
module.exports = app;
