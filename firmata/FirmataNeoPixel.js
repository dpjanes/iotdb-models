/*
 *  FirmataNeoPixel.js
 *
 *  David Janes
 *  IOTDB
 *  2014-11-15
 */

"use strict";

var iotdb = require("iotdb")

exports.Model = iotdb.make_model('FirmataNeoPixel')
    .product("http://www.adafruit.com/category/168")
    .facet(":device.lighting")
    .attribute(
        iotdb.make_color(":color")
            .control()
        )
    .driver_identity(":firmata")
    .driver_setup(function(paramd) {
        paramd.initd.n = 16;
        paramd.initd.extension = "neopixel";
        paramd.initd.pins = "rgb:pin=6,mode=sysex-output-int8";
    })
    .driver_out(function(paramd) {
        if (paramd.thingd.color !== undefined) {
            var c = new paramd.libs.Color(paramd.thingd.color)
            paramd.driverd.rgb = [ c.r * 255, c.g * 255, c.b * 255, paramd.initd.device ]
        }
    })
    .make()
    ;
