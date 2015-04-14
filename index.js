#!/usr/bin/env node

var opts = require("nomnom")
    .script("mdn")
    .options({
        search: {
            position: 0,
            help: "Search terms",
            list: true,
            required: true
        }
    }).parse();

var open = require("open");

open("http://mdn.io/" + opts.search.join(" "));
