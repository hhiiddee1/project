var data = [30, 25, 23, 25, 23, 25, 23, 25, 23, 25, 23, 25, 23, 25, 23, 25, 23, 25, 23, 25, 23, 25, 23, 25, 23, 25, 23, 25, 23, 25, 23, 25, 23, 25, 23, 25, 23, 25, 23, 25, 23, 25, 23, 25, 23, 25, 23, 25, 23, 25, 23, 25, 23, 25, 23]

var margin = {top: 0, right: 0, bottom: 0, left: 0},
            width = 1000 - margin.left - margin.right,
            height = 500 - margin.top - margin.bottom;


// makes Y scale
var scaleY = d3.scaleLinear()
                .domain([0, 100])
                .range([300, 0]);

// makes X scale
var scaleX = d3.scaleLinear()
                .domain([1960,2016])
                .range([0, 800]);

  // makes X scale
  var scaleXLine = d3.scaleLinear()
                  .domain([0, 56])
                  .range([0, 800]);


// defines line x and y variables
var line = d3.line()
              .x(function(d, i) { return scaleXLine(i); })
              .y(function(d) { return scaleY(d); });

var svg3 = d3.select("#line")
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .attr('class', 'linechart');

// create Y axis
svg3.append("g")
    .attr("class", "y axis")
    .attr("transform", "translate(" + 100 + "," + 100 + ")")
    .call(d3.axisLeft(scaleY));

// create X axis
svg3.append("g")
    .attr("class", "y axis")
    .attr("transform", "translate(" + 100 + "," + 400 + ")")
    .call(d3.axisBottom(scaleX));

// makes text for Y axis
svg3.append("text")
    .text("% of percentiles")
    .attr("transform", "rotate(-90)")
    .attr("x", -330)
    .attr("y", 50)
    .attr("font-weight","bold");

// makes text for X axis
svg3.append("text")
    .text("Year")
    .attr("x", 400)
    .attr("y", 450)
    .attr("font-weight","bold");

// makes line
svg3.append("path")
    .attr("class", "line")
    .attr("d", line(data))
    .attr("fill", "white")
    .attr("id", "line")
    .style("stroke", "#00FFFF")
    .style("stroke-width", 3)
    .attr("transform", "translate(100, 100)");
