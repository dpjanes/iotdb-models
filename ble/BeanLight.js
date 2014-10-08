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

/*

    MSG_ID_SERIAL_DATA        = 0x00, 0x00
    MSG_ID_BT_SET_ADV         = 0x05, 0x00
    MSG_ID_BT_SET_CONN        = 0x05, 0x02
    MSG_ID_BT_SET_LOCAL_NAME  = 0x05, 0x04
    MSG_ID_BT_SET_PIN         = 0x05, 0x06
    MSG_ID_BT_SET_TX_PWR      = 0x05, 0x08
    MSG_ID_BT_GET_CONFIG      = 0x05, 0x10
    MSG_ID_BT_ADV_ONOFF       = 0x05, 0x12
    MSG_ID_BT_SET_SCRATCH     = 0x05, 0x14
    MSG_ID_BT_GET_SCRATCH     = 0x05, 0x15
    MSG_ID_BT_RESTART         = 0x05, 0x20
    MSG_ID_BL_CMD             = 0x10, 0x00
    MSG_ID_BL_FW_BLOCK        = 0x10, 0x01
    MSG_ID_BL_STATUS          = 0x10, 0x02
    MSG_ID_CC_LED_WRITE       = 0x20, 0x00
    MSG_ID_CC_LED_WRITE_ALL   = 0x20, 0x01
    MSG_ID_CC_LED_READ_ALL    = 0x20, 0x02
    MSG_ID_CC_ACCEL_READ      = 0x20, 0x10
    MSG_ID_CC_ACCEL_READ_RSP  = 0x20, 0x90
    MSG_ID_AR_SET_POWER       = 0x30, 0x00
    MSG_ID_AR_GET_CONFIG      = 0x30, 0x06
    MSG_ID_DB_LOOPBACK        = 0xFE, 0x00
    MSG_ID_DB_COUNTER         = 0xFE, 0x01

*/
exports.Model = iotdb.make_model('BeanLight')
    .driver_identity({
        driver: 'iot-driver:ble',
        serviceUuid: 'a495ff10c5b14b44b5121370f02d74de'
    })
    .attribute(
        iotdb.make_color(":color")
            .control()
    )
    .driver_setup(function(paramd) {
    })
    .driver_out(function(paramd) {
        if (paramd.thingd.color) {
            if (paramd.scratchd.thingd.count === undefined) {
                paramd.scratchd.thingd.count = 0
            }

            var color = new paramd.libs.Color(paramd.thingd.color);
            paramd.driverd['a495ff11c5b14b44b5121370f02d74de'] = [
                0x80 + ((0x20 * paramd.scratchd.thingd.count++) & 0x7F),
                0x05, 0x00, // MSG_ID_BT_SET_ADV    
                0x20, 0x01, // MSG_ID_CC_LED_WRITE_ALL
                color.r * 0xFF, 
                color.g * 0xFF, 
                color.b * 0xFF,
                0x0A,
                0x39
            ];
        }
    })
    .driver_in(function(paramd) {
    })
    .make();
