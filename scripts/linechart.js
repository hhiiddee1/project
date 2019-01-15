var data = [30, 25, 23, 25, 23, 25, 23, 25, 23, 25, 23, 25, 23, 25, 23, 25, 23, 25, 23, 25, 23, 25, 23, 25, 23, 25, 23, 25, 23, 25, 23, 25, 23, 25, 23, 25, 23, 25, 23, 25, 23, 25, 23, 25, 23, 25, 23, 25, 23, 25, 23, 25, 23, 25, 23]
var color = ["rgb(222,235,247)", "rgb(198,219,239)", "rgb(158,202,225)", "rgb(107,174,214)", "rgb(66,146,198)"]

var margin = {top: 0, right: 0, bottom: 0, left: 0},
            width = 1000 - margin.left - margin.right,
            height = 500 - margin.top - margin.bottom;


// makes Y scale
var scaleY = d3.scaleLinear()
                .domain([0, 50])
                .range([300, 0]);

// makes X scale
var scaleX = d3.scaleLinear()
                .domain([2000,2016])
                .range([0, 800]);

  // makes X line scale
  var scaleXLine = d3.scaleLinear()
                  .domain([0, 16])
                  .range([0, 800]);


// defines line x and y variables
var line = d3.line()
              .x(function(d) { return scaleXLine(d[0]-2000); })
              .y(function(d) { return scaleY(d[1]); });

var svg3 = d3.select("#lineChartSvg")
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

function makeLineChart(data5, data4, data3, data2, data1, countryID){

  // parses data for line and datapoints

  //selects data for dataset5
  var dataLine5Parsed = []

  // selects country
  dataLine5= data5[countryID]
  // selects
  yearsData5 = Object.keys(dataLine5)
  for (i = 0; i < yearsData5.length; i++){
    datacom = []
    datacom.push(yearsData5[i])
    datacom.push(dataLine5[yearsData5[i]])
    dataLine5Parsed.push(datacom)
  }

  //selects data for dataset4
  var dataLine4Parsed = []

  // selects country
  dataLine4= data4[countryID]
  // selects
  yearsData4 = Object.keys(dataLine4)
  for (i = 0; i < yearsData4.length; i++){
    datacom = []
    datacom.push(yearsData4[i])
    datacom.push(dataLine4[yearsData4[i]])
    dataLine4Parsed.push(datacom)
  }

  //selects data for dataset3
  var dataLine3Parsed = []

  // selects country
  dataLine3= data3[countryID]
  // selects
  yearsData3 = Object.keys(dataLine3)
  for (i = 0; i < yearsData3.length; i++){
    datacom = []
    datacom.push(yearsData3[i])
    datacom.push(dataLine3[yearsData3[i]])
    dataLine3Parsed.push(datacom)
  }
  console.log(dataLine5Parsed)

  //selects data for dataset2
  var dataLine2Parsed = []

  // selects country
  dataLine2= data2[countryID]
  // selects
  yearsData2 = Object.keys(dataLine2)
  for (i = 0; i < yearsData2.length; i++){
    datacom = []
    datacom.push(yearsData2[i])
    datacom.push(dataLine2[yearsData2[i]])
    dataLine2Parsed.push(datacom)
  }

  // selects data for dataset1
  var dataLine1Parsed = []

  // selects country
  dataLine1= data1[countryID]
  // selects
  yearsData1 = Object.keys(dataLine1)
  for (i = 0; i < yearsData1.length; i++){
    datacom = []
    datacom.push(yearsData1[i])
    datacom.push(dataLine1[yearsData1[i]])
    dataLine1Parsed.push(datacom)
  }
  console.log(dataLine5Parsed)


  // makes line for data 5
  svg3.append("path")
      .attr("class", "line")
      .attr("d", line(dataLine5Parsed))
      .attr("fill", "white")
      .attr("id", "line")
      .style("stroke", color[0])
      .style("stroke-width", 3)
      .attr("transform", "translate(100, 100)");


  // makes circels for data 5
  svg3.selectAll("circle5")
     .data(dataLine5Parsed)
     .enter()
     .append("circle")
     .attr("id", "dot")
     .style("fill", color[0])
     .attr("cx", function(d,i) {
        return scaleXLine(d[0]-2000);
     })
     .attr("cy", function(d) {
        return scaleY(d[1]);
     })
     .attr("r", function(d) {
       return 5
     })
     .attr("transform", "translate(100, 100)")


  // makes line for data 4
  svg3.append("path")
      .attr("class", "line")
      .attr("d", line(dataLine4Parsed))
      .attr("fill", "white")
      .attr("id", "line")
      .style("stroke", color[1])
      .style("stroke-width", 3)
      .attr("transform", "translate(100, 100)");


  // makes circels for data 4
  svg3.selectAll("circle4")
     .data(dataLine4Parsed)
     .enter()
     .append("circle")
     .attr("id", "dot")
     .style("fill", color[1])
     .attr("cx", function(d,i) {
        return scaleXLine(d[0]-2000);
     })
     .attr("cy", function(d) {
        return scaleY(d[1]);
     })
     .attr("r", function(d) {
       return 5
     })
     .attr("transform", "translate(100, 100)")


  // makes line for data 3
  svg3.append("path")
      .attr("class", "line")
      .attr("d", line(dataLine3Parsed))
      .attr("fill", "white")
      .attr("id", "line")
      .style("stroke", color[2])
      .style("stroke-width", 3)
      .attr("transform", "translate(100, 100)");


  // makes circels for data 3
  svg3.selectAll("circle3")
     .data(dataLine3Parsed)
     .enter()
     .append("circle")
     .attr("id", "dot")
     .style("fill", color[2])
     .attr("cx", function(d,i) {
        return scaleXLine(d[0]-2000);
     })
     .attr("cy", function(d) {
        return scaleY(d[1]);
     })
     .attr("r", function(d) {
       return 5
     })
     .attr("transform", "translate(100, 100)")


   // makes line for data 2
   svg3.append("path")
       .attr("class", "line")
       .attr("d", line(dataLine2Parsed))
       .attr("fill", "white")
       .attr("id", "line")
       .style("stroke", color[3])
       .style("stroke-width", 3)
       .attr("transform", "translate(100, 100)");


   // makes circels for data 2
   svg3.selectAll("circle2")
      .data(dataLine2Parsed)
      .enter()
      .append("circle")
      .attr("id", "dot")
      .style("fill", color[3])
      .attr("cx", function(d,i) {
         return scaleXLine(d[0]-2000);
      })
      .attr("cy", function(d) {
         return scaleY(d[1]);
      })
      .attr("r", function(d) {
        return 5
      })
      .attr("transform", "translate(100, 100)")


   // makes line for data 1
   svg3.append("path")
       .attr("class", "line")
       .attr("d", line(dataLine1Parsed))
       .attr("fill", "white")
       .attr("id", "line")
       .style("stroke", color[4])
       .style("stroke-width", 3)
       .attr("transform", "translate(100, 100)");


   // makes circels for data 1
   svg3.selectAll("circle1")
      .data(dataLine1Parsed)
      .enter()
      .append("circle")
      .attr("id", "dot")
      .style("fill", color[4])
      .attr("cx", function(d,i) {
         return scaleXLine(d[0]-2000);
      })
      .attr("cy", function(d) {
         return scaleY(d[1]);
      })
      .attr("r", function(d) {
        return 5
      })
      .attr("transform", "translate(100, 100)")
}
