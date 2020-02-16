//Teacher component will show room #, 8 desk layout, sign out, present & absence
import React, { useEffect, useState } from "react";
import Desk from "../Desk/Desk";

export default function Teacher(props) {
  const { dailyData, desk, positions, roomId } = props.room;
  useEffect(() => {
    console.log(dailyData);
  });
  const [day, setDay] = useState("Please Select a Date");
  const changeDay = day => {
    setDay(day.date);
  };
  const grabDays = dailyData.map(day => {
    return (
      <a
        key={day.date}
        onClick={() => {
          changeDay(day);
        }}
        href="# "
      >
        {day.date + "  "}
      </a>
    );
  });

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
            desk={desk}
            roomId={roomId}
            pos={pos}
          />
        );
      })}
    </div>
  );
}
