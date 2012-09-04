const data = require("self").data;
var tabs = require("tabs");

tabs.on('ready', function(tab) {
    tab.attach({
        contentScriptFile: [
            data.url("jquery-1.7.1.min.js"),
            data.url("tool.js")
        ],
        onMessage: function (message) {
        }
    });
});