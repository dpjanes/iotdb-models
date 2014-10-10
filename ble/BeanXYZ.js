/*
 *  ble/BeanLight.js
 *
 *  David Janes
 *  IOTDB
 *  2014-10-08
 *
 *  LightBlue Bean RGB light control
 */

'use strict'
var iotdb = require('iotdb')
var util = require('util')

exports.Model = iotdb.make_model('BeanXYZ')
    .facet(":device.sensor.spatial")
    .driver_identity({
        driver: 'iot-driver:ble',
        serviceUuid: 'a495ff10c5b14b44b5121370f02d74de'
    })
    .attribute(iotdb.make_number(':x').reading().vector("x/y/z"))
    .attribute(iotdb.make_number(':y').reading().vector("x/y/z"))
    .attribute(iotdb.make_number(':z').reading().vector("x/y/z"))
    .driver_setup(function(paramd) {
        paramd.initd.poll = 2.5
        paramd.initd.subscribes =  [
           'a495ff11c5b14b44b5121370f02d74de'
        ]
    })
    .driver_out(function(paramd) {
        if (paramd.is_pull) {
            if (paramd.scratchd.count === undefined) {
                paramd.scratchd.count = 0
            }
            paramd.driverd['a495ff11c5b14b44b5121370f02d74de'] = [
                0x80 + ((0x20 * paramd.scratchd.count++) & 0x7F),
                    0x02, // Length
                    0x00, // Reserved
                        0x20, 0x10, // MSG_ID_CC_ACCEL_READ
                    0x00, 0x00  // CRC
            ];
        }
    })
    .driver_in(function(paramd) {
        var value = paramd.driverd['a495ff11c5b14b44b5121370f02d74de']
        if (value !== undefined) {
            // paramd.libs.log(value);
            // console.log(x, y, z)
            if (value.length != 14) {
                paramd.libs.log("# BeanLight.driver_in", "expected value.length==14", value)
            } else if (value[1] != 9) {
                paramd.libs.log("# BeanLight.driver_in", "expected value[1]==3", value)
            } else if (value[3] != 0x20) {
                paramd.libs.log("# BeanLight.driver_in", "expected value[3]==0x20", value)
            } else if (value[4] != 0x90) {
                paramd.libs.log("# BeanLight.driver_in", "expected value[4]==0x90", value)
            } else {
                paramd.thingd.x = (((value[5+1] << 8) | value[5+0]) << 16) >> 16
                paramd.thingd.y = (((value[7+1] << 8) | value[7+0]) << 16) >> 16
                paramd.thingd.z = (((value[9+1] << 8) | value[9+0]) << 16) >> 16
            }
        }
    })
    .make();
