//create json-server for app then import into App.js
const jsonServer  = require('json-server');
//desk server port 5000
const deskServer = jsonServer.create();
const deskRouter      = jsonServer.router({
  dailyData: require('./data/dailyData.json'), 
  deskData: require('./data/deskData.json'),
  roomData: require('./data/roomData.json'),
  studentData: require('./data/studentData.json')
});
const middlewares = jsonServer.defaults();
deskServer.use(middlewares);
deskServer.use(deskRouter);
deskServer.listen(5000, function () {
  console.log('running Server on port 5000/dailyData');
  console.log('running Server on port 5000/deskData');
  console.log('running Server on port 5000/roomData');
  console.log('running Server on port 5000/studentData');
});

// console.log(server)