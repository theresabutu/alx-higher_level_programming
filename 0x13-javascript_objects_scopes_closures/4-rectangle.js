#!/usr/bin/node
// The constructor is used to stablished the object properties or to call the methods to prepare the object for use
module.exports = class Rectangle {
  constructor (w, h) {
    if (w > 0 && h > 0) {
      this.width = w;
      this.height = h;
    }
  }

  print () {
    for (let t = 0; t < this.height; t++) {
      console.log('X'.repeat(this.width));
    }
  }

  rotate () {
    [this.height, this.width] = [this.width, this.height];
  }

  double () {
    this.width = this.width * 2;
    this.height = this.height * 2;
  }
};
