import * as chartFuncs from "../normalizeChartData";
import { WeatherDevice } from "./../deviceTypes";

describe("line graph data for weather", () => {
  const data = [
    {
      lastStateChange: "01-22-2019 15:30:10",
      fahrenheitReading: 75,
      celciusReading: 23,
      humidityReading: 15
    },
    {
      lastStateChange: "01-22-2019 15:30:15",
      fahrenheitReading: 70,
      celciusReading: 15,
      humidityReading: 15
    }
  ];

  it("converts line graph data to readable format", () => {
    expect(chartFuncs.normalizeData(WeatherDevice, data)).toEqual([
      [
        { x: "15:30:10", y: 75, type: "Fahrenheit" },
        { x: "15:30:15", y: 70, type: "Fahrenheit" }
      ],
      [
        { x: "15:30:10", y: 23, type: "Celcius" },
        { x: "15:30:15", y: 15, type: "Celcius" }
      ],
      [
        { x: "15:30:10", y: 15, type: "Humidity" },
        { x: "15:30:15", y: 15, type: "Humidity" }
      ]
    ]);
  });
});
