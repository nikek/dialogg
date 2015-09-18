//= include '../node_modules/riot/riot.min.js'
//= include '../node_modules/d3/d3.min.js'
//= include '_data/**/*'
//= include '_tags/**/*'

var glob = {
  sample: 'example',
  route: '/graph'
}

riot.observable(glob)

glob.on('routeTo', function(to) {
  console.log('hej', to)
  this.route = to;
  riot.update()
})

riot.mount('app', glob)