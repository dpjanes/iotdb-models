"use strict"

var iotdb = require('iotdb')
var iot = iotdb.iot()

var clock = iot.connect({
    model: "timer-clock",
    hour: 16,
    minute: 1
})
clock.on_change(function(thing) {
    console.log("+ change", thing.state())
})
