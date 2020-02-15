import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import Login from "./containers/Login/Login";
import "./App.scss";

function App() {
  const [room, setRoom] = useState({
    testing: "yes",
    roomId: null,
    positions: null,
    students: null,
    // desks: null,
    // dates: null,
    dailyData: null
  });

  useEffect(() => {
    //we will set up objects for our API calls in here
    const fetchClassroom = async () => {
      const roomData = await fetch("http://localhost:5000/roomdata")
        .then(response => {
          return response.json();
        })
        .then(myJson => {
          return myJson.roomData;
        });
      const dailyData = await fetch("http://localhost:5000/dailydata")
        .then(response => {
          return response.json();
        })
        .then(myJson => {
          return myJson.dailyData;
        });
      const studentData = await fetch("http://localhost:5000/studentdata")
        .then(response => {
          return response.json();
        })
        .then(myJson => {
          return myJson.studentData;
        });
      const deskData = await fetch("http://localhost:5000/deskdata")
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        return myJson.deskData
      });

      setRoom({
        ...room,
        positions: roomData[0].positions,
        roomId: roomData[0].roomId,
        dailyData: dailyData,
        students: studentData,
        desk: deskData
      });
    };
    fetchClassroom();
    //End of fetching of resources
    // setRoom({
    //   roomId: null,
    //   positions: null,
    //   students: null,
    //   desks: null,
    //   dates: null,
    //   dailyData: null
    // });
  }, []);

  console.log(room);
  return (
    <div className="App">
      <Login room={room} />
    </div>
  );
}

export default App;
