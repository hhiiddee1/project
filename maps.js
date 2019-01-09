

var world ="world_countries.json"

window.onload = function() {
  var request = d3.json(world)
  Promise.resolve(request).then(function(d){
    main(d);
  }).catch(function(e){
    throw(e);
  });
};

function main (countries){

  var format = d3.format(",");

  // Set tooltips
  var tip = d3.tip()
              .attr('class', 'd3-tip')
              .offset([-10, 0])
              .html(function(d) {
                return "<strong>Country: </strong><span class='details'>" + countries.properties.name + "<br></span>";
              })

  var margin = {top: 0, right: 0, bottom: 0, left: 0},
              width = 500 - margin.left - margin.right,
              height = 500 - margin.top - margin.bottom;

  var color = d3.scaleThreshold()
      .domain([10000,100000,500000,1000000,5000000,10000000,50000000,100000000,500000000,1500000000])
      .range(["rgb(247,251,255)", "rgb(222,235,247)", "rgb(198,219,239)", "rgb(158,202,225)", "rgb(107,174,214)", "rgb(66,146,198)","rgb(33,113,181)","rgb(8,81,156)","rgb(8,48,107)","rgb(3,19,43)"]);

  var path = d3.geoPath();

  var svg = d3.select("body")
              .append("svg")
              .attr("width", width)
              .attr("height", height)
              .append('g')
              .attr('class', 'map');

  var projection = d3.geoMercator()
                     .scale(450)
                    .translate( [width / 2 - 50, height + 250]);

  var path = d3.geoPath().projection(projection);

  console.log(countries.features)
  svg.selectAll(".country")
    .data(countries.features)
    .enter().append("path")
    .attr("class", "country")
    .attr("d", path)

  svg.call(tip);

}
