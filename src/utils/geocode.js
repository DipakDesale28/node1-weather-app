const request = require("postman-request");

const geocode = (address, callback) => {
  const url =
    "http://api.positionstack.com/v1/forward?access_key=00b0a15f8634e016131f5ad0a29ddcf4&query=" +
    address;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Network issue", undefined);
    } else if (!body.data) {
      callback("No Match found", undefined);
    } else {
      callback(undefined, body.data[0]);
    }
  });
};

module.exports = geocode;
