/*
 *  LIFXLight.js
 *
 *  David Janes
 *  IOTDB
 *  2014-11-24
 */

var iotdb = require("iotdb")

exports.Model = iotdb.make_model('LIFXLight')
    .facet(":device.lighting")
    .name("LIFX Light")
    .description("LIFX colored light")
    .o("on", iotdb.boolean.on)
    .o("color", iotdb.boolean.color)
    .driver_identity("iot-driver:lifx")
    .make()
    ;
