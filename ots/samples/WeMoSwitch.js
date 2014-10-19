/*
 *  WeMoSwitch.js
 *
 *  David Janes
 *  IOTDB.org
 *  2014-10-19
 *
 *  Turn a WeMo on and off every 5 seconds
 */

"use strict";

var iotdb = require('iotdb');

var iot = iotdb.iot();
var switches = iot.connect("WeMoSwitch");

var count = 0;

setInterval(function() {
    switches.set(':on', count++ % 2);
}, 5000);
