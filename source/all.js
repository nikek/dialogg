//= include '../node_modules/riot/riot.min.js'
//= include '../node_modules/grapnel/dist/grapnel.min.js'
//= include '../node_modules/d3/d3.min.js'
//= include '_data/**/*'
//= include '_tags/**/*'


// APP STATE
var glob = {
  sample: 'example',
  route: 'graph'
}


// ROUTING
var router = new Grapnel({ pushState : true });

router
  .get('/', function(req){
    glob.route = 'graph'
  })
  .get('/ex', function(req){
    glob.route = 'ex'
  })

router.on('navigate', riot.update);


// INIT THE APP
riot.mount('app', glob)