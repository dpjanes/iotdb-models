/*
 *  things/values/geocoordinates.js
 *
 *  David Janes
 *  IOTDB
 *  2014-07-06
 */

"use strict";

var iotdb = require("iotdb")
var attribute = iotdb.attribute

exports.Model = iotdb.make_model('GeoCoordinates')
    .attribute(
        iotdb.make_number(":latitude")
            .unit(":math.angle.degree")
            .vector("latitude/longitude/elevation")
    )
    .attribute(
        iotdb.make_number(":longitude")
            .unit(":math.angle.degree")
            .vector("latitude/longitude/elevation")
    )
    .attribute(
        iotdb.make_number(":elevation")
            .unit(":length.si.metre")
            .vector("latitude/longitude/elevation")
    )
    .make()
    ;
