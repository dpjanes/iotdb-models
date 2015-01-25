/*
 *  TCPConnectedLight.js
 *
 *  David Janes
 *  IOTDB
 *  2014-08-10
 */

var iotdb = require("iotdb")

exports.Model = iotdb.make_model('TCPConnectedLight')
    .facet(":device.lighting")
    .name("TCP Connected Light")
    .o("on", iotdb.boolean.on)
    .o("brightness", iotdb.number.brightness)
    .driver_identity("iot-driver:tcp-connected")
    .make()
    ;
