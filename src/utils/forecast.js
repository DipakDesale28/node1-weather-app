const request = require("postman-request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=17f07c965b1c6055f6a2a22a59523ece&query=" +
    latitude +
    "," +
    longitude;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Network issue", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          ". Its Temperature is " +
          body.current.temperature +
          " feels like " +
          body.current.feelslike
      );
    }
  });
};

module.exports = forecast;
