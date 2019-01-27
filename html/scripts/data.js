// collects all data
var world ="https://raw.githubusercontent.com/hhiiddee1/project/master/json/world_countries.json"
var five = "https://raw.githubusercontent.com/hhiiddee1/project/master/json/5th_20%25(highest).json"
var four = "https://raw.githubusercontent.com/hhiiddee1/project/master/json/4th_20%25.json"
var three = "https://raw.githubusercontent.com/hhiiddee1/project/master/json/3rd_20%25.json"
var two = "https://raw.githubusercontent.com/hhiiddee1/project/master/json/2nd_20%25.json"
var one = "https://raw.githubusercontent.com/hhiiddee1/project/master/json/1st_20%25(lowest).json"
var countrySelected = "AUT"
var countrySelectedName = "Austria"
var ned = []
var color = ["rgb(66,146,198)", "rgb(107,174,214)", "rgb(158,202,225)", "rgb(198,219,239)","rgb(222,235,247)"]

var dataTime = d3.range(0, 16).map(function(d) {
return new Date(1999 + d, 16, 16);
});

// loads all data in
window.onload = function() {
  var requests = [d3.json(world), d3.json(five), d3.json(four), d3.json(three), d3.json(two), d3.json(one)]
  Promise.all(requests).then(function(d){
    world = d[0]
    data5 = d[1]
    data4 = d[2]
    data3 = d[3]
    data2 = d[4]
    data1 = d[5]

    // makes pie chart
    makePieChart(data5, data4, data3, data2, data1, "AUT", "2015")

    // makes linechart
    makeLineChart(data5, data4, data3, data2, data1, "AUT")

    // makes datamap
    makeDataMap(world, data5);

    // makes dropdown menu interactive
    d3.selectAll(".m")
      .on("click", function() {

        // selects variables
        countrySelected = this.getAttribute("value");
        countrySelectedName = this.innerHTML;

        // deletes all old elements
        d3.selectAll("#dot").remove()
        d3.selectAll("#line").remove()
        d3.selectAll(".arc").remove()
        d3.selectAll("#noInfo").remove()
        d3.selectAll("#slider").remove()

        // makes new head texts
        d3.selectAll("#headTextPieChart")
          .text("Piechart of " + countrySelectedName + " in 2015")
        d3.selectAll("#headTextLineChart")
          .text(" Linechart of " + countrySelectedName + " over the years")

        // makes new slider
        makeSlider()

        //selects right country state and adds new elements
        if (data5[countrySelected] == undefined){
          makeNoInfo()
          makeNoInfoLine()
        }
        else if (data5[countrySelected]["2015"] == undefined){
          makeNoInfoYear()
          makeLineChart(data5, data4, data3, data2, data1, countrySelected)
        }
        else{
          makePieChart(data5, data4, data3, data2, data1, countrySelected, "2015")
          makeLineChart(data5, data4, data3, data2, data1, countrySelected)
        }
      });

    // makes slider for begin state
    makeSlider()
  }).catch(function(e){
    throw(e);
  });
};

// function to make new slider
function makeSlider(){

  // source: https://bl.ocks.org/johnwalley/e1d256b81e51da68f7feb632a53c3518?fbclid=IwAR2lD_FwjdZXjnJ6_FNF1h3jfokYQjgzAXWsPfeOi1nPZmsRPS3d-k0xyjw
  // makes slider button
  var sliderTime = d3
    .sliderBottom()
    .min(d3.min(dataTime))
    .max(d3.max(dataTime))
    .step(1000 * 60 * 60 * 24 * 365)
    .width(500)
    .tickFormat(d3.timeFormat('%Y'))
    .tickValues(dataTime)
    .default(new Date(2014, 16, 3))
    .on('onchange', val => {
      d3.select('p#value-time').text(d3.timeFormat('%Y')(val));
      d3.selectAll(".arc").remove()
      d3.selectAll("#noInfo").remove()
      d3.selectAll("#headTextPieChart")
        .text("Piechart of " + countrySelectedName + " in " + d3.timeFormat('%Y')(val))
      if (data5[countrySelected] == undefined){
        makeNoInfo()
        makeNoInfoLine()
      }
      else if (data5[countrySelected][d3.timeFormat('%Y')(val)] == undefined){
        makeNoInfoYear()
      }
      else {
        makePieChart(data5, data4, data3, data2, data1, countrySelected, d3.timeFormat('%Y')(val))
      }
    });

  // makes slider svg
  var timeSliderSvg = d3
    .select('div#slider-time')
    .append('svg')
    .attr("id", "slider")
    .attr('width', 600)
    .attr('height', 100)
    .append('g')
    .attr('transform', 'translate(30,30)');

  // calls sliderbutton to svg
  timeSliderSvg.call(sliderTime);

  // sets year left to slider in begin state
  d3.select('p#value-time').text(d3.timeFormat('%Y')(sliderTime.value()));
}
