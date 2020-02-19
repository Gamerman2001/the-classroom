//will show data for a desk
import React, { useState } from "react";
import Student from "../Student/Student";
import { Button, Header, Icon, Modal } from "semantic-ui-react";
import _ from "lodash";
import "./Desk.scss";

export default function Desk(props) {
  const {
    user,
    dailyData,
    desk,
    daily,
    students,
    day,
    roomId,
    findStudent,
    curStudent,
    details,
    pos
  } = props;
  // console.log(students, "coming from desks");
  // const [studentId, setStudentId] = useState("No Student")
  // const [student, setStudent] = useState("No Student")
  // let studentData = ''
  // debugger

  const thisDaily = daily.find(daily => {
    // debugger
    return daily.positionId === pos;
  });
  //find the desk current to the position on this day
  const thisDesk = desk.find(deskPos => {
    return deskPos.deskId === pos;
  });
  const deskModal = () => {
    // debugger;
    return (
      <Modal trigger={<Button>Desk Info</Button>} closeIcon>
        <Header icon="archive" content="Desk Info" />
        <Modal.Content>
          <p>ID: {details.id}</p>
          <p>Purchased: {details.purchased}</p>
          {_.map(
            _.map(details.repairs, n => _.toPairs(n)),
          j => _.map(j, x => (<p>{`${x[0]}: ${x[1]}`}</p>))
          )}
        </Modal.Content>
      </Modal>
    );
  };
  const studentModal =(curStudent)=> {
    // debugger
   return  curStudent ? <Student student={curStudent} /> : null
  }
  const testing = details => {
    // debugger;
  };

  //find current desks for day

  // console.log(daily, 'checking this tdaily')
  // setStudentId(thisDaily.studentId)
  const thisStudent = () => {
    return students.find(student => {
      if (thisDaily) {
        return thisDaily.studentId === student.id;
      }
    });
  };
  // debugger
  // console.log(studentId, "this student");
  return (
    <div>
      {user === "Teacher" ? (
        <div>
          {thisDaily ? (
            <div className="student-border">
              <div>Desk position {pos}</div>
              <Student
                studentId={thisDaily.studentId}
                student={thisStudent()}
              />
             
            </div>
          ) : null}
        </div>
      ) : null}
      {user === "test" ? (
        <div>
          <div>Desk Position: {pos}</div>
          <div>ID: {details.id}</div>
          {deskModal()}
          {studentModal(curStudent)}
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
