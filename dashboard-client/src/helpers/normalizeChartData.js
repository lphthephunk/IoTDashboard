import moment from "moment";

import { WeatherDevice, DogFeederDevice } from "./deviceTypes";

export const normalizeData = (deviceType, data) => {
  switch (deviceType) {
    case WeatherDevice:
      return normalizeWeatherData(data);
    case DogFeederDevice:
      break;
    default:
      break;
  }
};

function normalizeWeatherData(data) {
  // format the data for x,y coordinates
  let finalFormattedArray = [];
  let humidityArr = [];
  let fahrenheitArr = [];
  let celciusArr = [];

  // by default, filter the data set such that we are always starting our readings at the current date and time
  // TODO: give the user the option to view previous data for given months, or a range of months together on one import { compose, graphql } from 'react-apollo'
  // just need to change the data set, everything else should be able to stay the sameimport Barchart from './../components/chartsAndGraphs/Barchart';

  // we will need to persist the entire data set in the store if we are to do this
  let itemCount = 0;
  data
    .sort((a, b) => {
      if (a.lastStateChange > b.lastStateChange) {
        return 1;
      } else {
        return -1;
      }
    })
    .forEach(element => {
      let formattedDate = moment(element.lastStateChange).format("HH:mm:ss");
      fahrenheitArr.push({
        x: formattedDate,
        y: element.fahrenheitReading,
        type: "Fahrenheit"
      });
      celciusArr.push({
        x: formattedDate,
        y: element.celciusReading,
        type: "Celcius"
      });
      humidityArr.push({
        x: formattedDate,
        y: element.humidityReading,
        type: "Humidity"
      });
      itemCount++;
    });

  finalFormattedArray.push(fahrenheitArr);
  finalFormattedArray.push(celciusArr);
  finalFormattedArray.push(humidityArr);

  // we only want to show 15 readings on the chart at a time for now
  // possibly change this later to be handled by the user
  if (itemCount > 15) {
    for (let index in finalFormattedArray) {
      let lengthAtIndex = finalFormattedArray[index].length;
      finalFormattedArray[index] = finalFormattedArray[index].slice(
        lengthAtIndex - 15,
        lengthAtIndex
      );
    }
  }

  return finalFormattedArray;
}
