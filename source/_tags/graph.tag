<graph>

  <div id="graph-container"></div>

  <style>
  path { 
      stroke: white;
      stroke-width: 3;
      fill: none;
  }


  .axis path,
  .axis line {
      fill: none;
      stroke: grey;
      stroke-width: 1;
      shape-rendering: crispEdges;
  }

  .axis path,
  .axis line {
    fill: none;
    stroke: #555;
  }
  .axis text {
    fill: white;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 1em;
    font-weight: bold;
  }

  .y.axis path,
  .x.axis path {
    display: none;
  }

  .y.axis line,
  .x.axis line {
    stroke: rgba(255,255,255,.1);
    shape-rendering: crispEdges;
  }

  .good-band {
    fill: green;
    opacity: .4;
  }
  </style>


<script>

      // SETUP

      var margin = {top: 30, right: 20, bottom: 30, left: 50};
      var width = 900 - margin.left - margin.right;
      var height = 300 - margin.top - margin.bottom;
      var yMax = 28;



      // Set the ranges
      var x = d3.time.scale().range([0, width]);
      var y = d3.scale.linear().range([height, 0]);


var customTimeFormat = d3.time.format.multi([
  [".%L", function(d) { return d.getMilliseconds(); }],
  [":%S", function(d) { return d.getSeconds(); }],
  ["%I:%M", function(d) { return d.getMinutes(); }],
  ["%I %p", function(d) { return d.getHours(); }],
  ["%a %d", function(d) { return d.getDay() && d.getDate() != 1; }],
  ["%b %d", function(d) { return d.getDate() != 1; }],
  ["%B", function(d) { return d.getMonth(); }],
  ["%Y", function() { return true; }]
]);


      // Define the axes
      var xAxis = d3.svg.axis().scale(x)
        .orient('top').tickFormat(customTimeFormat).tickSize(height);

      var yAxis = d3.svg.axis().scale(y)
        .orient('right').tickSize(width);

      // Define the line
      var valueline = d3.svg.line()
        .x(function(d) { return x(d.time); })
        .y(function(d) { return y(d.val); });

      // Area
      var area = d3.svg.area()
        .x(function(d) { return x(d.date); })
        .y0(height)
        .y1(function(d) { return y(d.close); });




  // Adds the svg canvas
  var svg = d3.select(this['graph-container'])
    .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
    .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

// Get the data
    dialogJSON.gcm.forEach(function(d) {
      var datz = new Date(d.time);
      d.time = datz;
      d.val = +d.val;
    });

    // Scale the range of the data
    x.domain(d3.extent(dialogJSON.gcm, function(d) { return d.time; }));
    y.domain([0, yMax]);


    svg.append("rect")
      .attr("x", 0)
      .attr("y", y(10))
      .attr("width", width)
      .attr("height", y(yMax - 6))
      .attr('class','good-band');

    // Add the valueline path.
    svg.append('path')
      .attr('class', 'line')
      .attr('d', valueline(dialogJSON.gcm));

    // Add the X Axis
    svg.append('g')
      .attr('class', 'x axis')
      .attr('transform', 'translate(0,' + height + ')')
      .call(xAxis)
      .selectAll('text')
        .attr('y', function(){ return 15; });

    // Add the Y Axis
    svg.append('g')
      .attr('class', 'y axis')
      .call(yAxis)
      .selectAll('text')
        .style('text-anchor', 'end')
        .attr('x', function(){ return -10; });



</script>

</graph>