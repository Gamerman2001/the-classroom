//create a json-server and DB for data
const firstRoute = require('./data/dailyData.json');
const secondRoute = require('./data/deskData.json');
const thirdRoute  = require('./data/roomData.json');
const fourthRoute = require('./data/studentData.json');

module.exports = function (){
  return {
    firstRoute,
    secondRoute,
    thirdRoute,
    fourthRoute
  }
  }