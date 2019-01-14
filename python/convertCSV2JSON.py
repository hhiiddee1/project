# Hidde van Oijen 12451096
import csv
import json


def main():
    dict = {}
    name = "5th_20%(highest)"

    # reads data from csvfile
    with open(name + ".csv") as csv_file:
        csv_reader = csv.DictReader(csv_file)

        # collects right data and puts it in a dictionary
        for row in csv_reader:
            # print(row['World Development Indicators'])
            if row['ï»¿"Data Source"'] == "Austria":
                make_country(row, dict)
            if row['ï»¿"Data Source"'] == "Belgium":
                make_country(row, dict)
            if row['ï»¿"Data Source"'] == "Bosnia and Herzegovina":
                make_country(row, dict)
            if row['ï»¿"Data Source"'] == "Bulgaria":
                make_country(row, dict)
            if row['ï»¿"Data Source"'] == "Croatia":
                make_country(row, dict)
            if row['ï»¿"Data Source"'] == "Cyprus":
                make_country(row, dict)
            if row['ï»¿"Data Source"'] == "Czech Republic":
                make_country(row, dict)
            if row['ï»¿"Data Source"'] == "Denmark":
                make_country(row, dict)
            if row['ï»¿"Data Source"'] == "Estonia":
                make_country(row, dict)
            if row['ï»¿"Data Source"'] == "Finland":
                make_country(row, dict)
            if row['ï»¿"Data Source"'] == "France":
                make_country(row, dict)
            if row['ï»¿"Data Source"'] == "Germany":
                make_country(row, dict)
            if row['ï»¿"Data Source"'] == "Greece":
                make_country(row, dict)
            if row['ï»¿"Data Source"'] == "Hungary":
                make_country(row, dict)
            if row['ï»¿"Data Source"'] == "Iceland":
                make_country(row, dict)
            if row['ï»¿"Data Source"'] == "Ireland":
                make_country(row, dict)
            if row['ï»¿"Data Source"'] == "Italy":
                make_country(row, dict)
            if row['ï»¿"Data Source"'] == "Latvia":
                make_country(row, dict)
            if row['ï»¿"Data Source"'] == "Lithuania":
                make_country(row, dict)
            if row['ï»¿"Data Source"'] == "Luxembourg":
                make_country(row, dict)
            if row['ï»¿"Data Source"'] == "Macedonia, FYR":
                make_country(row, dict)
            if row['ï»¿"Data Source"'] == "Moldova":
                make_country(row, dict)
            if row['ï»¿"Data Source"'] == "Montenegro":
                make_country(row, dict)
            if row['ï»¿"Data Source"'] == "Netherlands":
                make_country(row, dict)
            if row['ï»¿"Data Source"'] == "Norway":
                make_country(row, dict)
            if row['ï»¿"Data Source"'] == "Portugal":
                make_country(row, dict)
            if row['ï»¿"Data Source"'] == "Romania":
                make_country(row, dict)
            if row['ï»¿"Data Source"'] == "Russian Federation":
                make_country(row, dict)
            if row['ï»¿"Data Source"'] == "Slovak Republic":
                make_country(row, dict)
            if row['ï»¿"Data Source"'] == "Slovenia":
                make_country(row, dict)
            if row['ï»¿"Data Source"'] == "Spain":
                make_country(row, dict)
            if row['ï»¿"Data Source"'] == "Sweden":
                make_country(row, dict)
            if row['ï»¿"Data Source"'] == "Switzerland":
                make_country(row, dict)
            if row['ï»¿"Data Source"'] == "Turkey":
                make_country(row, dict)
            if row['ï»¿"Data Source"'] == "Ukraine":
                make_country(row, dict)
            if row['ï»¿"Data Source"'] == "United Kingdom":
                make_country(row, dict)


    # writes data to JSON file
    with open(name + '.json', 'w') as json_file:
        json.dump(dict, json_file)

def make_country(row, dict):
    dict_temp = {}
    year = 1960
    indicator = 1
    while year != 2018:
        if row[None][indicator] != "":
            dict_temp[year] = float(row[None][indicator])
        year += 1
        indicator += 1
    dict[str(row['World Development Indicators'])] = dict_temp

if __name__ == "__main__":
    main()
