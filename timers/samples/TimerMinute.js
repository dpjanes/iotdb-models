"use strict"

var iotdb = require('iotdb')
var iot = iotdb.iot()

var clock = iot.connect("timer-minute")
clock.on('when', function(thing, attribute, value) {
    console.log("+ change", thing.state())
})
