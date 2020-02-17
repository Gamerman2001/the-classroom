//will show data for a desk
import React, { useState } from "react";
import './Desk.scss'

export default function Desk(props) {
  const { user, dailyData, desk, daily, students, roomId, pos } = props;
  // console.log(students, "coming from desks");
  // const [studentId, setStudentId] = useState("No Student")
  // const [student, setStudent] = useState("No Student")
  // let studentData = ''
  const thisDaily = daily.find(daily => {
    return daily.positionId === pos;
  });
  const thisAbsent = daily.map(daily => {
    return daily.positionId === pos;
  });
  console.log(daily, 'checking this tdaily')
  // setStudentId(thisDaily.studentId)
  const thisStudent = students.find(student => {
    if(thisDaily){
      return thisDaily.studentId === student.id
    }
  })

  // console.log(studentId, "this student");
  return (
    <div >
      
      {user === "Teacher" ? (
        <div >
          {thisDaily ? (
            <div className='student-border'>
              <div>Desk position {pos}</div>
              <div>Student ID: {thisDaily.studentId}</div>
              <div>Student Name: {thisStudent.bio.givenName}</div>
              {/* will have onclick that will activate the student component to show more details of the student */}
              {/* <div>Family Name: {thisStudent.bio.familyName}</div>
              <div>NickName: {thisStudent.bio.nickName}</div>
              <div>Absent: {thisDaily.absent.toString()}</div>
              <div>Tardy: {thisDaily.tardy.toString()}</div> */}
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
//Object { entryId: "fbe44e46-d53a-4a02-9cd4-b260d68596ce", studentId: "91abf0a1-717c-4123-bdcb-d5215a6ac570", absent: false, tardy: false, roomId: "6490847d-a3db-44ba-90eb-8832bf938e69", positionId: "041f9dce-7b1c-4c65-bc06-422c74a358c3" }

// bio: Object { givenName: "Charlie", familyName: "Guzman", nickName: "Charlie", … }
// ​
// grades: Object { project1: 100, project2: 100, project3: 100, … }
// ​
// history: Object { absences: 8, gpa: 4 }
// ​
// id: "c5e6ba4a-2bfc-45b8-ad2d-fdab394e8feb"
