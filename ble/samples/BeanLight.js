var iotdb = require('iotdb')
var _ = iotdb.helpers

var iot = iotdb.iot()

var lights = iot
    .connect('BeanLight')

var colors = [ "white", "red", "blue", "green", "orange", "cyan", "black" ]
var ci = 0;

setInterval(function() {
    var color = colors[ci++ % colors.length];
    console.log("+ set color", color)
    lights.set(':color', color)
}, 2000)

lights.on_meta(function(thing) {
    console.log("+ state change", thing.meta().state())
})
