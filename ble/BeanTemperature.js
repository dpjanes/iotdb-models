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

exports.Model = iotdb.make_model('BeanTemperature')
    .driver_identity({
        driver: 'iot-driver:ble',
        serviceUuid: 'a495ff10c5b14b44b5121370f02d74de'
    })
    .attribute(
        iotdb.make_number(":temperature")
            .reading()
    )
    .driver_setup(function(paramd) {
        paramd.initd.poll = 30
        paramd.initd.subscribes =  [
           'a495ff11c5b14b44b5121370f02d74de'
        ]
    })
    .driver_out(function(paramd) {
        if (paramd.is_pull) {
            paramd.driverd['a495ff11c5b14b44b5121370f02d74de'] = [
                0x80 + ((0x20 * paramd.scratchd.count++) & 0x7F),
                    0x02, // Length
                    0x00, // Reserved
                        0x20, 0x11, // MSG_ID_CC_TEMP_READ          
                    0x00, 0x00  // CRC
            ];
        }
    })
    .driver_in(function(paramd) {
        var value = paramd.driverd['a495ff11c5b14b44b5121370f02d74de']
        if (value !== undefined) {
            if (value.length != 8) {
                paramd.libs.log("# BeanLight.driver_in", "expected value.length==8", value)
            } else if (value[1] != 3) {
                paramd.libs.log("# BeanLight.driver_in", "expected value[1]==3", value)
            } else if (value[3] != 32) {
                paramd.libs.log("# BeanLight.driver_in", "expected value[3]==32", value)
            } else if (value[4] != 145) {
                paramd.libs.log("# BeanLight.driver_in", "expected value[4]==145", value)
            } else {
                paramd.thingd['temperature'] = value[5]
            }
        }
    })
    .make();
