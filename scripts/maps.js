// Name: Hidde van Oijen
// Student Number: 12451096

var legendNamesMap = ["Highest 20% > 45%", "Highest 20% = 40 - 45%", "Highest 20% < 40%", "No info of 2015", "No info"];
var colorMapLegend = ["rgb(66,146,198)", "rgb(107,174,214)", "rgb(158,202,225)", "red", "black"];

// function for making map
function makeDataMap (countries, highest){

  var format = d3.format(",");


  // set tooltips
  var tip = d3.tip()
              .attr("class", "d3-tip")
              .offset([-10, 0])
              .style("position","absolute")
              .style("background","white")
              .style("padding","5 10px")
              .style("border-radius","5px")
              .style("opacity","0")
              .style("border", "2px steelblue solid")
              .html(function(d) {
                if (highest[d.id] == undefined){
                  return "<strong>Country: </strong><span class='details'>" + d.properties.name + " <br></span>" +
                          "<strong>Top 20%: </strong><span class='details'> No information </span>"
                }
                else if (highest[d.id]["2015"] == undefined){
                return "<strong>Country: </strong><span class='details'>" + d.properties.name + " <br></span>" +
                          "<strong>Top 20%: </strong><span class='details'> No information of 2015 </span>"
                }
                var highestPercentage = highest[d.id]["2015"]
                return "<strong>Country: </strong><span class='details'>" + d.properties.name + " <br></span>" +
                        "<strong>Top 20%: </strong><span class='details'>" + highestPercentage + "</span>"
              });

  // makes width and height with margins
  var margin = {top: 0, right: 0, bottom: 0, left: 0},
              width = 500 - margin.left - margin.right,
              height = 400 - margin.top - margin.bottom;

  // makes colors for countries
  var color = d3.scaleThreshold()
      .domain([0,30,35,40,45,50])
      .range(["rgb(247,251,255)", "rgb(222,235,247)", "rgb(198,219,239)", "rgb(158,202,225)", "rgb(107,174,214)", "rgb(66,146,198)"]);


  var svg = d3.select("#map")
              .append("svg")
              .attr("id", "mapsvg")
              .attr("width", width)
              .attr("height", height)
              .append("g");


  svg.append("text")
      .text("percentage of income of all income by")
      .attr("transform", "rotate(-90)")
      .attr("x", -400)
      .attr("y", 20);

  // makes legend for map
  svg.selectAll("textlegend")
      .data(legendNamesMap)
      .enter()
      .append("text")
      .text(function(d) {
        return d;
      })
      .attr("x", function(d) {
        return 60;
      })
      .attr("y", function(d, i) {
        return i * 20 + 263;
      });

  svg.selectAll("rect")
      .data(legendNamesMap)
      .enter()
      .append("rect")
      .attr("width", 20 )
      .attr("height", 20 - padding)
      .attr("x", function(d) {
        return 30;
      })
      .attr("y", function(d, i) {
        return i * 20 + 250;
      })
      .style("fill", function(d, i){
        return colorMapLegend[i];
      });


  var projection = d3.geoMercator()
                     .scale(350)
                     .translate( [width / 2 + 20, height + 210]);

  var path = d3.geoPath().projection(projection);

  // adds countries to svg
  svg.selectAll(".country")
      .data(countries.features)
      .enter().append("path")
      .attr("class", "country")
      .attr("d", path);

  svg.call(tip);

  // adds click on mouseover functions and some styling
  svg.append("g")
      .attr("class", "countries")
      .selectAll("path")
      .data(countries.features)
      .enter()
      .append("path")
      .attr("d", path)
      .style("fill", function(d){
        if (highest[d.id] == undefined){
          return ("black");
        }
        else if (highest[d.id]["2015"] == undefined){
          return ("red");
        }
        return (color(highest[d.id]["2015"]));
      })
      .style("stroke", "white")
      .style("stroke-width", 1.5)
      .style("opacity",0.8)
      // tooltips
        .style("stroke","white")
        .style("stroke-width", 0.3)
        .on("mouseover",function(d){
          tip.show(d);
            d3.select(this)
              .style("opacity", 1)
              .style("stroke","white")
              .style("stroke-width",3);
          })
          .on("mouseout", function(d){
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
            d3.selectAll("#slider").remove()
            makeSlider()
            d3.selectAll("#headTextPieChart")
              .text("Piechart of " + d.properties.name + " in 2015")
            d3.selectAll("#headTextLineChart")
              .text(" Linechart of " + d.properties.name + " over the years")
            countrySelected = d.id;
            countrySelectedName = d.properties.name;
            if (highest[countrySelected] == undefined){
              makeNoInfo();
              makeNoInfoLine();
            }
            else if (highest[countrySelected]["2015"] == undefined){
              makeNoInfoYear();
              makeLineChart(data5, data4, data3, data2, data1, countrySelected);
            }
            else {
              makePieChart(data5, data4, data3, data2, data1, countrySelected, "2015");
              makeLineChart(data5, data4, data3, data2, data1, countrySelected);
            }
          });
}
