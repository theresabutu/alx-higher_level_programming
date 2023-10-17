#!/usr/bin/node
// we use <exports> when we’re exporting functions and value individually. This is handy for helper functions that could be needed all over an app, but when you have a module that exports just the one thing, it’s more common to use <module.exports>
class Rectangle {}
module.exports = Rectangle;
