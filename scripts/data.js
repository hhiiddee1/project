var world ="../json/world_countries.json"
var five = "../json/5th_20%(highest).json"
var four = "../json/4th_20%.json"
var three = "../json/3rd_20%.json"
var two = "../json/2nd_20%.json"
var one = "../json/1st_20%(lowest).json"

var ned = []

window.onload = function() {
  var requests = [d3.json(world), d3.json(five), d3.json(four), d3.json(three), d3.json(two), d3.json(one)]
  Promise.all(requests).then(function(d){
    world = d[0]
    data5 = d[1]
    data4 = d[2]
    data3 = d[3]
    data2 = d[4]
    data1 = d[5]


    makePieChart(data5, data4, data3, data2, data1, "AUT")
    makeLineChart(data5, data4, data3, data2, data1, "AUT")

    main(world, data5);
  }).catch(function(e){
    throw(e);
  });
};
