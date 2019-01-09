var margin = {top: 0, right: 0, bottom: 0, left: 0},
            width = 500 - margin.left - margin.right,
            height = 500 - margin.top - margin.bottom;

var svg3 = d3.select("body")
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .append('g')
            .attr('class', 'linechart');
