# Report

## Description
The site makes a visualisation of the income inequality of europe over different years. The visualisation makes a it possible for the user to get a good perspective on income inequality of europe based on facts.

## Technical design
### Visualisations
The are three visualisations on the visualisation page. The first is a map that shows a overview of the highest 20% income group of a country. The bluer the color the more the highest 20% earns of the total earnings. The second is a barchart that shows the percentage of income of all income groups over the years of one country. Austria is shown here when the page is loaded. Afterwards you can change the country by clicking a country on the map or selecting a country in the dropdown menu on the navigationbar. The last is a piechart that shows the percentage of income of all income groups of one country in a year. The data of austria is also shown here when loaded. Other countries can also be selected by clicking on the map or selecting a country in dropdown menu on the navbar. This means that both the linechart and the piechart show the data of the same country. The year of the piechart can be changed by sliding the slider to the chosen year. The image bellow gives a good overview what the visualisation page looks like. I zoomed it out and is not as good looking as on the site, but I did this because now all the elements are on the same page and the overview is better than if it wasn't zoomed out.

![visualisation overview](https://user-images.githubusercontent.com/1015496/52010169-20e4a480-24d5-11e9-9a6d-129a60917211.png)

### data
There are 5 data sets that are shown in the different visualisations. Each dataset contains the data of a different income group. The income groups go from the highest to the lowest 20%. That's why there are 5 datasets. Each dataset contains a dictionary of countries and in the countries is a dictonary of years.

The data in the map contains of one dataset. This dataset is the highest 20% dataset. The data in the country is selected by selecting the country in the dataset and then selecting 2015.

The data in the linechart contains all the datasets. Each dataset will be selected and then the correct country is selected in each dataset. The selected country comes form a click on the map or selected country in the dropdown. all the data of that country is send through to the linechart. The data of each dataset will create a line.

The data in the piechart contains also all the datasets. The data of a country is selected and then the year 2015. This will create a piechart of the country in the year 2015. The country is saved in a variable. With the slider a new year can be selected and with the saved variable of the country a new piechart of the new year can be created.

## Development
There were multiple challanges that I encountered when i made the visualisations. Each element had it's own difficulties.

The map was a element i made in a earlier assignment. But the map was made with a earlier version of D3. There was a lot of difference in the two version. This resulted that i needed to rediscover how to make the datamap. when i got the hang of it and saw the new way of inplementation, made it easier.

The Piechart I never made before. It to explore the way of implementation of it. after that it was not very difficult. At first I wanted to make a Piechart without hole. But I changed it and is now more of a donut chart.

The linechart I also made earlier. The difference was that this is a multiple linechart instead of a single linechart. But this was also not very difficult to implement.

The most difficult i had was with sending, selecting and loading of the the right data. I had many difficulties with loading the data into the linechart and the piechart. This was because i wanted to load them in with dictionaries. When i couldn't get it done, I switched to lists. I was also struggeling with the slider to hold the data of the right country. I solved it with making a global variable of the last selected country.

## Decisions
I made a couple of important decisions during the project.

The first important decision in the project is to let go of the click on function in the linechart. This function would allow the user to select a year for the piechart by clicking on a year in the linechart. I replaced this function with a slider under the linechart. The reason for this change was because i found it more logical and easier to use.

The second decision I made was to let go of the update function. The update would make the transition of the piechart and linechart smoother. The update function took very long to implement and I didn´t get a perfect transition. This meant the transition was buggy and not very smooth. I now replace the data with a remove of the old charts and making new charts. The transition of the is not as smooth as a update function could have been, but it´s better than my old update function. Most of the data doesn´t differentiate very much. Because of this the transition isn´t very disturbing.

Another change I made was make the Piechart, a donut chart. I did this because it gave me a lot more space for the legend. The data is still in the piechart is still very seperatable and
