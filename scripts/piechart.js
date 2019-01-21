var data = [20,20,20,20,20]
var legendNames = ["Highest 20%", "4th 20%", "3rd 20%", "2nd 20%", "Lowest 20%"]
var margin = {top: 0, right: 0, bottom: 0, left: 0},
            width = 500 - margin.left - margin.right,
            height = 500 - margin.top - margin.bottom;
            radius = width / 2;

var padding = 5;

var arc = d3.arc()
            .outerRadius(radius - 10)
            .innerRadius(radius - 100);

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

svg2.selectAll("textlegend")
  .data(legendNames)
  .enter()
  .append("text")
  .text(function(d) {
    return d;
  })
  .attr("x", function(d) {
    return -30;
  })
  .attr("y", function(d, i) {
    return i * 20 - 37;
  })

svg2.selectAll("rect")
    .data(legendNames)
    .enter()
    .append("rect")
    .attr("width", 20 )
    .attr("height", 20 - padding)
    .attr("x", function(d) {
      return -60;
    })
    .attr("y", function(d, i) {
      return i * 20 - 50;
    })
    .style("fill", function(d, i){
      return color[i]
    })

function makePieChart(data5, data4, data3, data2, data1, countryID, year){
  console.log(year)
  dataPie = []
  var data52015 = data5[countryID][year]
  var data42015 = data4[countryID][year]
  var data32015 = data3[countryID][year]
  var data22015 = data2[countryID][year]
  var data12015 = data1[countryID][year]
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

  g.append("text")
    .attr("transform", function(d) {
      d.innerRadius = radius - 100;
      d.outerRadius = radius - 10;
      return "translate(" + arc.centroid(d) + ")"
    })
    .attr("text-anchor", "middle")
    .text(function(d, i){
      return dataPie[i] + "%";
    })
}

function updateBarChart(data5, data4, data3, data2, data1, countryID, year) {
  console.log(year)
  dataPie = []
  var data52015 = data5[countryID][year]
  var data42015 = data4[countryID][year]
  var data32015 = data3[countryID][year]
  var data22015 = data2[countryID][year]
  var data12015 = data1[countryID][year]
  dataPie.push(data52015)
  dataPie.push(data42015)
  dataPie.push(data32015)
  dataPie.push(data22015)
  dataPie.push(data12015)

  console.log(dataPie)
  d3.select("#pie")
  .data(pie(dataPie))
  .enter()
  .selectAll("path")
  .transition()
  .duration(200)
  .attr("d",arc)
}