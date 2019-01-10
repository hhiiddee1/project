var year2015 = []
d3.json("5th_20%(highest).json").then(function(datacsv) {
      var countries = Object.keys(datacsv)
      for (const [keys] of Object.entries(datacsv)) {
        country = datacsv[keys];
        countries.push(country);
        percentage = datacsv[keys]["2015"];
        year2015.push(percentage);

      }
      console.log(year2015)
})
