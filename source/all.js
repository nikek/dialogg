//= include '../node_modules/riot/riot.min.js'
//= include '../node_modules/d3/d3.min.js'
//= include '_tags/**/*'

var glob = {sample: 'example'}

var a = 12
var b = 14

setTimeout(function () {
  glob.max = d3.max([a,b])
  riot.update()
}, 1000)

riot.mount('app', glob)