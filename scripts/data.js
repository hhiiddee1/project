var world ="../json/world_countries.json"
var five = "../json/5th_20%(highest).json"
var four = "../json/4th_20%.json"
var three = "../json/3rd_20%.json"
var two = "../json/2nd_20%.json"
var one = "https://raw.githubusercontent.com/hhiiddee1/project/master/json/1st_20%25(lowest).json"
var countrySelected = "AUT"
var ned = []
var color = ["rgb(66,146,198)", "rgb(107,174,214)", "rgb(158,202,225)", "rgb(198,219,239)","rgb(222,235,247)"]

window.onload = function() {
  var requests = [d3.json(world), d3.json(five), d3.json(four), d3.json(three), d3.json(two), d3.json(one)]
  Promise.all(requests).then(function(d){
    world = d[0]
    data5 = d[1]
    data4 = d[2]
    data3 = d[3]
    data2 = d[4]
    data1 = d[5]


    makePieChart(data5, data4, data3, data2, data1, "AUT", "2015")
    makeLineChart(data5, data4, data3, data2, data1, "AUT")

    main(world, data5);

    d3.selectAll(".m")
      .on("click", function() {
        var countryID = this.getAttribute("value");
        d3.selectAll("#dot").remove()
        d3.selectAll("#line").remove()
        d3.selectAll(".arc").remove()
        makeLineChart(data5, data4, data3, data2, data1, countryID)
        makePieChart(data5, data4, data3, data2, data1, countryID, "2015")
        countrySelected = countryID
      })

      var dataTime = d3.range(0, 16).map(function(d) {
    return new Date(1999 + d, 16, 3);
  });

// source: https://bl.ocks.org/johnwalley/e1d256b81e51da68f7feb632a53c3518?fbclid=IwAR2lD_FwjdZXjnJ6_FNF1h3jfokYQjgzAXWsPfeOi1nPZmsRPS3d-k0xyjw
  var sliderTime = d3
    .sliderBottom()
    .min(d3.min(dataTime))
    .max(d3.max(dataTime))
    .step(1000 * 60 * 60 * 24 * 365)
    .width(500)
    .tickFormat(d3.timeFormat('%Y'))
    .tickValues(dataTime)
    .default(new Date(2000, 16, 3))
    .on('onchange', val => {
      d3.select('p#value-time').text(d3.timeFormat('%Y')(val));
      d3.selectAll(".arc").remove()
      makePieChart(data5, data4, data3, data2, data1, countrySelected, d3.timeFormat('%Y')(val))
    });

  var timeSliderSvg = d3
    .select('div#slider-time')
    .append('svg')
    .attr('width', 600)
    .attr('height', 100)
    .append('g')
    .attr('transform', 'translate(30,30)');

  timeSliderSvg.call(sliderTime);

  d3.select('p#value-time').text(d3.timeFormat('%Y')(sliderTime.value()));

  }).catch(function(e){
    throw(e);
  });
};
