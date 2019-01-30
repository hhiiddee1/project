bar chart# Report

## Description
The site makes a visualisation of the income inequality of Europe over different years. The visualisation makes a it possible for the user to get a good perspective on income inequality of Europe based on facts. The image bellow gives a good overview what the visualisation page looks like. I zoomed it out and is not as good looking as on the site, but I did this because now all the elements are on the same image and the overview is better than if it wasn't zoomed out.

![visualisation overview](https://user-images.githubusercontent.com/1015496/52010169-20e4a480-24d5-11e9-9a6d-129a60917211.png)

## Technical design
### Visualisations
There are three visualisations on the visualisation page. The first is a map that shows an overview of the highest 20% income group of a country. The bluer the colour the more the highest 20% earns of the total earnings. By hovering over a country, the data of the highest 20% of that country in the year 2015 is shown. The second is a bar chart that shows the percentage of income of all income groups over the years of one country. Austria is shown here when the page is loaded. Afterwards you can change the country by clicking a country on the map or selecting a country in the dropdown menu on the navigation bar. By hovering over one of the circles in a line the data of that datapoint is shown. The last is a pie chart that shows the percentage of income of all income groups of one country in a year. The data of Austria is also shown here when loaded. Other countries can also be selected by clicking on the map or selecting a country in dropdown menu on the navigation bar. This means that both the line chart and the pie chart show the data of the same country. The year of the pie chart can be changed by sliding the slider to the chosen year.

### data
There are 5 data sets that are shown in the different visualisations. Each dataset contains the data of a different income group. The income groups go from the highest to the lowest 20%. That's why there are 5 datasets. Each dataset contains a dictionary of countries and in the countries is a dictionary of years.

The data in the map contains of one dataset. This dataset is the highest 20% dataset. The data in the country is selected by selecting the country in the dataset and then selecting 2015.

The data in the line chart contains all the datasets. Each dataset will be selected and then the correct country is selected in each dataset. The selected country comes from a click on the map or selected country in the dropdown. all the data of that country is sent through to the line chart. The data of each dataset will create a line. With the same data circles on that line are made. This shows the datapoints of the datasets.

The data in the pie chart contains also all the datasets. The data of a country is selected and then the year 2015. This will create a pie chart of the country in the year 2015. The country is saved in a variable. With the slider a new year can be selected and with the saved variable of the country, a new pie chart of the new year will be created. If the year of the pie chart has been changed and a new country has been selected it moves back to the data of the selected country in 2015.

## Development
There were multiple challenges that I encountered when I made the visualisations. Each element had its own difficulties.

The map was an element I made in an earlier assignment. But the map was made with an earlier version of D3. There was a lot of difference in the two version. This resulted that I needed to rediscover how to make the datamap. when I got the hang of it and saw the new way of implementation, made it easier.

The pie chart I never made before. It to explore the way of implementation of it. after that it was not very difficult. At first, I wanted to make a pie chart without hole. But I changed it and is now more of a donut chart.

The line chart I also made earlier. The difference was that this is a multiple line chart instead of a single line chart. But this was also not very difficult to implement. I changed the idea of using a clickable year in the X axis to a slider. The decision to do that is explained in the first paragraph of decisions.

The most difficult I had was with sending, selecting and loading of the right data. I had many difficulties with loading the data into the line chart and the pie chart. This was because I wanted to load them in with dictionaries. When I couldn't get it done, I switched to lists. I was also struggling with the slider to hold the data of the right country. I solved it with making a global variable of the last selected country.

The dropdown menu I first placed outside of the navigation bar. Later I placed it in the navigation bar.

## Decisions
I made a couple of important decisions during the project.

The first important decision in the project is to let go of the click on function in the line chart. This function would allow the user to select a year for the pie chart by clicking on a year in the line chart. I replaced this function with a slider under the line chart. The reason for this change was because i found it more logical and easier to use.

The second decision I made was to let go of the update function. The update would make the transition of the pie chart and line chart smoother. The update function took very long to implement and I didn´t get a perfect transition. This meant the transition was buggy and not very smooth. I now replace the data with a remove of the old charts and making new charts. The transition of the is not as smooth as an update function could have been, but it´s better than my old update function. Most of the data doesn´t differentiate very much. Because of this the transition isn´t very disturbing.

Another change I made was make the pie chart, a donut chart. I did this because it gave me a lot more space for the legend. The data is still in the pie chart is still very clear and it made the whole visualisation cleaner.

The last important decision was to place the dropdown menu in the navigation bar. At first, I wasn't intended to make a navigation bar. I later made one because it was easier to place extra information on other pages. The dropdown menu was before I placed it in the navigation bar in a sort of awkward position. By placing dropdown in the navigation bar, the visualisation page looked cleaner.
