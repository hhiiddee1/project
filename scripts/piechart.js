var data = [20,20,20,20,20]
var color = ["rgb(222,235,247)", "rgb(198,219,239)", "rgb(158,202,225)", "rgb(107,174,214)", "rgb(66,146,198)"]

var margin = {top: 0, right: 0, bottom: 0, left: 0},
            width = 500 - margin.left - margin.right,
            height = 500 - margin.top - margin.bottom;
            radius = width / 2;

var arc = d3.arc()
            .outerRadius(radius - 10)
            .innerRadius(radius - 50);

var pie = d3.pie()
            .value(function(d){
              return d;
            });

var svg2 = d3.select("#pieChartSvg")
            .append("svg")
            .attr('id', 'pieChart')
            .attr("width", width)
            .attr("height", height)
            .append('g')
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")

function makePieChart(data5, data4, data3, data2, data1, countryID){

  dataPie = []
  var data52015 = data5[countryID]["2015"]
  var data42015 = data4[countryID]["2015"]
  var data32015 = data3[countryID]["2015"]
  var data22015 = data2[countryID]["2015"]
  var data12015 = data1[countryID]["2015"]
  dataPie.push(data52015)
  dataPie.push(data42015)
  dataPie.push(data32015)
  dataPie.push(data22015)
  dataPie.push(data12015)
  console.log(dataPie)


  var g = svg2.selectAll(".arc")
              .attr("id", "pie")
              .data(pie(dataPie))
              .enter()
              .append("g")
              .attr("class", "arc")

  g.append("path")
  .attr("d", arc)
  .style("fill", function(d, i){
    return color[i]
  })
}
