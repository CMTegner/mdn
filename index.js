#!/usr/bin/env node

var opts = require("nomnom")
    .script("mdn")
    .options({
        search: {
            position: 0,
            help: "Search terms",
            list: true,
            required: true
        },
        markdown: {
            abbr: "m",
            help: "Output the article as markdown instead of opening it in a browser",
            flag: true
        },
        version: {
            abbr: "v",
            help: "Print the version and exit",
            flag: true,
            callback: function () {
                return require("./package.json").version;
            }
        }
    }).parse();

var uri = "http://mdn.io/" + opts.search.join(" ");

if (opts.markdown) {
    var jsdom = require("jsdom");
    jsdom.env(uri,function (errors, window) {
        var html = window.document.querySelector("#wikiArticle").innerHTML;
        document.stdout.write(html);
    });
} else {
    var open = require("open");
    open(uri);
}
