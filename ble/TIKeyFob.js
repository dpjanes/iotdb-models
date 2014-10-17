/*
 *  TIKeyFob.js
 *
 *  David Janes
 *  IOTDB
 *  2014-02-06
 *
 *  A simple model for a TIKeyFob. A better model
 *  would separate the buttons into separate subthings,
 *  but I don't have time right now
 *
 *  Also: VERY IMPORTANT: the datetime thing is horribly
 *  stupid. These are supposed to be 'instanenous' items,
 *  but to get triggers we have to have a different value 
 *  in them all the time
 */

"use strict";

var iotdb = require("iotdb")

exports.Model = iotdb.make_model('TIKeyFob')
    .attribute (
        iotdb.make_boolean(':on')
            .reading()
    )
    .attribute (
        iotdb.make_boolean(':on', 'left')
            .reading()
    )
    .attribute (
        iotdb.make_boolean(':on', 'right')
            .reading()
    )
    .driver_identity({
        driver: 'iot-driver:ble',
        localName: 'Keyfobdemo',
        serviceUuid: 'ffe0'
    })
    .driver_setup(function(paramd) {
        paramd.initd.subscribes = [ "ffe1" ]
    })
    .driver_out(function(paramd) {
    })
    .driver_in(function(paramd) {
        if (paramd.driverd.ffe1 !== undefined) {
            var v = paramd.driverd.ffe1[0]
            paramd.thingd.on = (v & 0x03) ? true : false
            paramd.thingd.left = (v & 0x01) ? true : false
            paramd.thingd.right = (v & 0x02) ? true : false
        }
    })
    .make();
