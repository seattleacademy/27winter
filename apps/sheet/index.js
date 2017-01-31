var alexa = require('alexa-app');
var gsjson = require('google-spreadsheet-to-json');

// Allow this module to be reloaded by hotswap when changed
module.change_code = 1;

// Define an alexa-app
var app = new alexa.app('sheet');
app.launch(function(req, res) {
    gsjson({
            spreadsheetId: '1QW5jpQjCORczJNuc5s_CHrqocmY0_pN9FS2AjzOMubQ',
            // other options...
        })
        .then(function(result) {
            console.log("result", result.length, result[0].student);
            res.say("these are the spreadsheet results");
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
