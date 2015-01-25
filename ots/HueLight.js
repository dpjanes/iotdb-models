/*
 *  HueLight.js
 *
 *  David Janes
 *  IOTDB
 *  2014-01-26
 */

var iotdb = require("iotdb")

exports.Model = iotdb.make_model('HueLight')
    .facet(":device.lighting")
    .name("Hue Light")
    .description("Philips Hue colored light")
    .o("on", iotdb.boolean.on)
    .o("color", iotdb.string.color)
    .driver_identity("iot-driver:hue")
    .make()
    ;
