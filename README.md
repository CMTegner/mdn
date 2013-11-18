mdn
===
CLI for easily opening JavaScript documentation on the Mozilla Developer Network (MDN) in your browser. The utility uses the [mdn.io](http://lazd.github.io/mdn-io-passive-url-shortening-for-mdn.html) "passive URL shortener", which effectively works like the "I'm feeling lucky" feature on your favorite search engine.

Usage
-----
```
Usage: mdn <search terms>
```

Examples
--------
```
$ mdn defineproperty
```
Opens the `Object.defineProperty` documentation on MDN in your browser.
```
$ mdn css transitions
```
Opens the `Using CSS transitions` documentation on MDN in your browser.
```
$ mdn array#Methods
```
Opens the `Array` documentation on MDN in your browser and jumps down to the `Methods` section.

Compatability
-------------
`mdn` uses [open](https://npmjs.org/package/open) which tries to find a suitable command for opening URLs in your browser, regardless of which platform you're on. If you're having problems using `mdn` on your platform, please raise a ticket in their [issue tracker](https://github.com/pwnall/node-open/issues).

Install
-------
With [NPM](https://npmjs.org) do:
```
npm install -g mdn
```

License
-------
MIT
