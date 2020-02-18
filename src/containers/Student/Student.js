//will show data for a student
import React from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";
import _ from "lodash";

export default function Student({ studentId, student }) {
  // debugger;
  return (
    <div>
      <div>ID: {student.id}</div>
      <div>Name: {student.bio.givenName + " " + student.bio.familyName}</div>

      <Modal trigger={<Button>More Info</Button>} closeIcon>
        <Header icon="archive" content="Student Bio" />
        <Modal.Content>
          <p>NickName: {student.bio.nickName}</p>
          <p>email: {student.bio.email}</p>
          <p>age: {student.bio.age}</p>
          <p>grade: {student.bio.grade}</p>
          <p>absences: {student.history.absences}</p>
          <p>gpa: {student.history.gpa}</p>
          {_.map(_.toPairs(student.grades), n => (
            <p>{`${n[0]}: ${n[1]}`}</p>
          ))}
        </Modal.Content>
      </Modal>
    </div>
  );
}
