//will show data for a desk
import React, { useState } from "react";

export default function Desk(props) {
  const { user, dailyData, desk, students, roomId, pos } = props;
  // console.log(students, "coming from desks");
  const thisStudent = students.find(student => {
    return student.positionId === pos;
  });

  console.log(thisStudent, "this student");
  return (
    <div>
      {user === "Teacher" ? <div>should see something here</div> : null}
    </div>
  );
}
