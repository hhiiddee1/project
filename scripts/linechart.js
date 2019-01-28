// Name: Hidde van Oijen
// Student Number: 12451096

var legendNames = ["Highest 20%", "4th 20%", "3rd 20%", "2nd 20%", "Lowest 20%"]

// makes margin, width and height
var margin = {top: 0, right: 0, bottom: 0, left: 0}
var width = 1200
var height = 500
var padding = 5;


// makes Y scale
var scaleY = d3.scaleLinear()
                .domain([0, 100])
                .range([300, 0]);

// makes X scale
var scaleX = d3.scaleLinear()
                .domain([2000,2015])
                .range([0, 800]);

// makes X line scale
var scaleXLine = d3.scaleLinear()
                    .domain([0, 15])
                    .range([0, 800]);


// defines line x and y variables
var line = d3.line()
              .x(function(d) { return scaleXLine(d[0]-2000); })
              .y(function(d) { return scaleY(d[1]); });

// creates svg
var svg3 = d3.select("#lineChartSvg")
              .append("svg")
              .attr("width", width)
              .attr("height", height)
              .attr("class", "linechart");

// creates tooltip
var tooltip = d3.select("#lineChartSvg").append("div")
                .style("position","absolute")
                .style("background","white")
                .style("padding","5 10px")
                .style("border-radius","5px")
                .style("opacity","0")
                .attr("transform", "translate(100, 50)");

// create Y axis
svg3.append("g")
    .attr("class", "yAxis")
    .attr("transform", "translate(100, 50)")
    .call(d3.axisLeft(scaleY));

// create X axis
svg3.append("g")
    .attr("class", "xAxis")
    .attr("transform", "translate(100, 350)")
    .call(d3.axisBottom(scaleX));

// makes text for Y axis
svg3.append("text")
    .text("Income held by different income groups")
    .attr("transform", "rotate(-90)")
    .attr("x", -350)
    .attr("y", 50)
    .attr("font-weight","bold");

// makes text for X axis
svg3.append("text")
    .text("Year")
    .attr("x", 450)
    .attr("y", 400)
    .attr("font-weight","bold");

// adds text for legend
svg3.selectAll("textlegend")
    .data(legendNames)
    .enter()
    .append("text")
    .text(function(d) {
      return d;
    })
    .attr("x", function(d) {
      return 980;
    })
    .attr("y", function(d, i) {
      return i * 20 + 163;
    })

// adds rectangles for legend
svg3.selectAll("rect")
    .data(legendNames)
    .enter()
    .append("rect")
    .attr("width", 20 )
    .attr("height", 20 - padding)
    .attr("x", function(d) {
      return 950;
    })
    .attr("y", function(d, i) {
      return i * 20 + 150;
    })
    .style("fill", function(d, i){
      return color[i]
    })

// function for making linechart
function makeLineChart(data5, data4, data3, data2, data1, countryID){

  // parses data for line and datapoints

  //selects data for dataset5
  var dataLine5Parsed = []

  // selects country
  dataLine5= data5[countryID]

  // selects data of country
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

  // selects of country
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

  // selects of country
  yearsData3 = Object.keys(dataLine3)
  for (i = 0; i < yearsData3.length; i++){
    datacom = []
    datacom.push(yearsData3[i])
    datacom.push(dataLine3[yearsData3[i]])
    dataLine3Parsed.push(datacom)
  }

  //selects data for dataset2
  var dataLine2Parsed = []

  // selects country
  dataLine2= data2[countryID]

  // selects of country
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

  // selects of country
  yearsData1 = Object.keys(dataLine1)
  for (i = 0; i < yearsData1.length; i++){
    datacom = []
    datacom.push(yearsData1[i])
    datacom.push(dataLine1[yearsData1[i]])
    dataLine1Parsed.push(datacom)
  }


  // makes line for data 5
  svg3.append("path")
      .attr("class", "line")
      .attr("d", line(dataLine5Parsed))
      .attr("fill", "white")
      .attr("id", "line")
      .style("stroke", color[0])
      .style("stroke-width", 3)
      .attr("transform", "translate(100, 50)");


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
     .attr("transform", "translate(100, 50)")
     // makes text appear when hovering over
    .on("mouseover", function(d,i){
      tooltip.transition()
        .style("opacity", 1)

        tooltip.html(d,i)
          .text(d[1] + "%")
          .style("left", (scaleXLine(d[0]-2000) + 100)+"px")
          .style("top",(scaleY(d[1]))+"px")
          .style("border","2px " + color[0] + " solid")

          d3.select(this).style("opacity", 1)
      })
      // makes text go away when hovering over
      .on("mouseout", function(d){
        tooltip.transition()
            .style("opacity", 0)
        d3.select(this).style("opacity", 1)
      });


  // makes line for data 4
  svg3.append("path")
      .attr("class", "line")
      .attr("d", line(dataLine4Parsed))
      .attr("fill", "white")
      .attr("id", "line")
      .style("stroke", color[1])
      .style("stroke-width", 3)
      .attr("transform", "translate(100, 50)");


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
       .attr("transform", "translate(100, 50)")
      // makes text appear when hovering over
       .on("mouseover", function(d,i){
         tooltip.transition()
           .style("opacity", 1)

         tooltip.html(d,i)
           .text(d[1] + "%")
           .style("left", (scaleXLine(d[0]-2000) + 100)+"px")
           .style("top",(scaleY(d[1]))+"px")
           .style("border","2px " + color[1] + " solid")

           d3.select(this).style("opacity", 1)
       })
       // makes text go away when hovering over
       .on("mouseout", function(d){
         tooltip.transition()
             .style("opacity", 0)
         d3.select(this).style("opacity", 1)
       });


  // makes line for data 3
  svg3.append("path")
      .attr("class", "line")
      .attr("d", line(dataLine3Parsed))
      .attr("fill", "white")
      .attr("id", "line")
      .style("stroke", color[2])
      .style("stroke-width", 3)
      .attr("transform", "translate(100, 50)");


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
       .attr("transform", "translate(100, 50)")
       // makes text appear when hovering over
      .on("mouseover", function(d,i){
        tooltip.transition()
          .style("opacity", 1)

          tooltip.html(d,i)
            .text(d[1] + "%")
            .style("left", (scaleXLine(d[0]-2000) + 100)+"px")
            .style("top",(scaleY(d[1]))+"px")
            .style("border","2px " + color[2] + " solid")

            d3.select(this).style("opacity", 1)
        })
        // makes text go away when hovering over
        .on("mouseout", function(d){
          tooltip.transition()
              .style("opacity", 0)
          d3.select(this).style("opacity", 1)
        });

   // makes line for data 2
   svg3.append("path")
       .attr("class", "line")
       .attr("d", line(dataLine2Parsed))
       .attr("fill", "white")
       .attr("id", "line")
       .style("stroke", color[3])
       .style("stroke-width", 3)
       .attr("transform", "translate(100, 50)");


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
        .attr("transform", "translate(100, 50)")
        // makes text appear when hovering over
       .on("mouseover", function(d,i){
         tooltip.transition()
           .style("opacity", 1)

           tooltip.html(d,i)
             .text(d[1] + "%")
             .style("left", (scaleXLine(d[0]-2000) + 100)+"px")
             .style("top",(scaleY(d[1]))+"px")
             .style("border","2px " + color[3] + " solid")

             d3.select(this).style("opacity", 1)
         })
         // makes text go away when hovering over
         .on("mouseout", function(d){
           tooltip.transition()
               .style("opacity", 0)
           d3.select(this).style("opacity", 1)
         });

   // makes line for data 1
   svg3.append("path")
       .attr("class", "line")
       .attr("d", line(dataLine1Parsed))
       .attr("fill", "white")
       .attr("id", "line")
       .style("stroke", color[4])
       .style("stroke-width", 3)
       .attr("transform", "translate(100, 50)");


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
        .attr("transform", "translate(100, 50)")
        // makes text appear when hovering over
       .on("mouseover", function(d,i){
         tooltip.transition()
           .style("opacity", 1)

           tooltip.html(d,i)
             .text(d[1] + "%")
             .style("left", (scaleXLine(d[0]-2000) + 100)+"px")
             .style("top",(scaleY(d[1]))+"px")
             .style("border","2px " + color[4] + " solid")

             d3.select(this).style("opacity", 1)
         })
         // makes text go away when hovering over
         .on("mouseout", function(d){
           tooltip.transition()
               .style("opacity", 0)
           d3.select(this).style("opacity", 1)
         });
}

// function for making text when a country has no data
function makeNoInfoLine(){
  svg3.append("text")
      .attr("id", "noInfo")
      .text("No info of this country")
      .attr("transform", "translate(400, 200)")
}
