function main (countries, highest){

  var format = d3.format(",");


  // Set tooltips
  var tip = d3.tip()
              .attr('class', 'd3-tip')
              .offset([-10, 0])
              .html(function(d) {
                console.log(d.id)
                if (highest[d.id] == undefined){
                  return "<strong>Country: </strong><span class='details'>" + d.properties.name + "<br></span>" +
                          "<strong>Top 20%: </strong><span class='details'> No information </span>"
                }
                else if (highest[d.id]["2015"] == undefined){
                return "<strong>Country: </strong><span class='details'>" + d.properties.name + "<br></span>" +
                          "<strong>Top 20%: </strong><span class='details'> No information of this year</span>"
                }
                var highestPercentage = highest[d.id]["2015"]
                return "<strong>Country: </strong><span class='details'>" + d.properties.name + "<br></span>" +
                        "<strong>Top 20%: </strong><span class='details'>" + highestPercentage + "</span>"
              })

  var margin = {top: 0, right: 0, bottom: 0, left: 0},
              width = 500 - margin.left - margin.right,
              height = 500 - margin.top - margin.bottom;

  var color = d3.scaleThreshold()
      .domain([0,30,35,40,45,50])
      .range(["rgb(247,251,255)", "rgb(222,235,247)", "rgb(198,219,239)", "rgb(158,202,225)", "rgb(107,174,214)", "rgb(66,146,198)"]);

  var path = d3.geoPath();

  var svg = d3.select("#map")
              .append("svg")
              .attr('id', 'mapsvg')
              .attr("width", width)
              .attr("height", height)
              .append('g')
  var projection = d3.geoMercator()
                     .scale(440)
                    .translate( [width / 2 - 50, height + 280]);

  var path = d3.geoPath().projection(projection);


  svg.selectAll(".country")
    .data(countries.features)
    .enter().append("path")
    .attr("class", "country")
    .attr("d", path)

  svg.call(tip);
  // console.log(countries.features.properties.name);
  svg.append("g")
      .attr("class", "countries")
    .selectAll("path")
      .data(countries.features)
    .enter().append("path")
      .attr("d", path)
      .style("fill", function(d){
        if (highest[d.id] == undefined){
          return("black")
        }
        else if (highest[d.id]["2015"] == undefined){
          return("red")
        }
        return(color(highest[d.id]["2015"]));
      })
      .style('stroke', 'white')
      .style('stroke-width', 1.5)
      .style("opacity",0.8)
      // tooltips
        .style("stroke","white")
        .style('stroke-width', 0.3)
        .on('mouseover',function(d){
          tip.show(d);
            d3.select(this)
              .style("opacity", 1)
              .style("stroke","white")
              .style("stroke-width",3);
          })
          .on('mouseout', function(d){
            tip.hide(d);

            d3.select(this)
              .style("opacity", 0.8)
              .style("stroke","white")
              .style("stroke-width",0.3);
          })
          .on("click",function(d){
            d3.selectAll("#dot").remove()
            d3.selectAll("#line").remove()
            d3.selectAll(".arc").remove()
            d3.selectAll("#noInfo").remove()
            d3.selectAll("#headTextPieChart")
              .text("Piechart of " + d.properties.name + " in 2015")
            d3.selectAll("#headTextLineChart")
              .text(" Linechart of " + d.properties.name + " over the years")
            countrySelected = d.id
            countrySelectedName = d.properties.name
            console.log(highest[countrySelected])
            if (highest[countrySelected] == undefined){
              console.log("no info")
              makeNoInfo()
              makeNoInfoLine()
            }
            else if (highest[countrySelected]["2015"] == undefined){
              console.log("no info year")
              makeNoInfoYear()
              makeLineChart(data5, data4, data3, data2, data1, countrySelected)
            }
            else {
            makePieChart(data5, data4, data3, data2, data1, countrySelected, "2015")
            makeLineChart(data5, data4, data3, data2, data1, countrySelected)
            }
          });
}
