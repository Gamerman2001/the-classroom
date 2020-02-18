//custodial page will show room number, 8 desk setup, custodial storage, signout , and desk information
import React, { useEffect, useState } from "react";
import Desk from '../Desk/Desk'

export default function Custodial(props) {
  const { dailyData, desk, positions, roomId } = props.room;
  const [day, setDay] = useState("Please Select a Date");
  const [daily, setDaily] = useState(["Please Select a Date"]);
  const [studentDesk, setStudentDesk] = useState(["Please Select a Date"]);
  useEffect(() => {
    console.log(dailyData, desk, positions, roomId);
  });

  const grabDays = dailyData.map(day => {
    console.log(day, "in grabdays");
    return (
      <a
        key={day.date}
        onClick={() => {
          setDay(day.date);
          setDaily([...day.students]);
          setStudentDesk([...day.desks]);
          // setAbsent([...absentKids])
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
  return <div>
       <div>{grabDays}</div>
       <div>CURRENT DAY: {day}</div>
      {positions.map((pos, index) => {
        return (
          <Desk
            key={index}
            user="Custodial"
            day={day}
            dailyData={dailyData}
            daily={daily}
            // students={students}
            // findStudent={findStudent}
            desk={studentDesk}
            roomId={roomId}
            pos={pos}
          />
        );
      })}
    
    </div>;
}
