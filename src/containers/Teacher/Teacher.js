//Teacher component will show room #, 8 desk layout, sign out, present & absence
import React, { useEffect, useState } from "react";
import Desk from "../Desk/Desk";

export default function Teacher(props) {
  const { dailyData, desk, positions, roomId } = props.room;
  useEffect(() => {
    console.log(dailyData);
  });
  //setting day to filter student and desk data passed down
  const [day, setDay] = useState("Please Select a Date");
  const [student, setStudent] = useState(["Please Select a Date"]);
  const [studentDesk, setStudentDesk] = useState(["Please Select a Date"]);
  // const changeDay = changeDay => {
  //   setDay(changeDay.date);
  //   filterStudents();
  //   console.log(day,'day')
  // };
  //grabbing all the days and turning them into links that will be clicked on to update the current day
  const grabDays = dailyData.map(day => {
    return (
      <a
        key={day.date}
        onClick={() => {
          setDay(day.date);
          setStudent([...day.students])
          setStudentDesk([...day.desks])
          // filterStudents(day);
          // filterDesks(day);
          // console.log(day, 'need this data')
        }}
        href="# "
      >
        {day.date + "  "}
      </a>
    );
  });
//grabbing return array to filter students
// const filterStudents = (data) => {
//   console.log(data.students, 'filter students')
//   return data.students
// }
//grabbing return array to filter desks
// const filterDesks = (data) => {
//   // console.log(data.desks, 'filter students')
//   return data.desks
// }


  return (
    <div>
      <div>{grabDays}</div>

      <div>CURRENT DAY: {day}</div>
      {positions.map((pos, index) => {
        return (
          <Desk
            key={index}
            user="Teacher"
            day={day}
            dailyData={dailyData}
            students={student}
            desk={studentDesk}
            roomId={roomId}
            pos={pos}
          />
        );
      })}
    </div>
  );
}
