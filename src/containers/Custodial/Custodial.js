//custodial page will show room number, 8 desk setup, custodial storage, signout , and desk information
import React, { useEffect, useState } from "react";
import _ from "lodash";
import './Custodial.scss'
import Desk from "../Desk/Desk";

export default function Custodial(props) {
  const { dailyData, desk, positions, roomId, students } = props.room;
  const [day, setDay] = useState("Please Select a Date");
  const [daily, setDaily] = useState(["Please Select a Date"]);
  const [studentDesk, setStudentDesk] = useState(["Please Select a Date"]);
  useEffect(() => {
    console.log(dailyData, desk, positions, roomId);
  });
  //find current desks for day
  const todayDesk = day => {
    // console.log(day, 'current day')
    setStudentDesk(_.find(dailyData, { date: day }).desks);
    // debugger;
  };

  const deskInUse = todayDesk => {
    return _.filter(studentDesk, {
      status: "In Use"
    });
  };
  const deskInStandby = todayDesk => {
    return _.filter(studentDesk, {
      status: "Standby"
    });
  };

  const deskInRepair = todayDesk => {
    return _.filter(studentDesk, {
      status: "Repaired"
    });
  };

  const deskDetails = deskId => {
    return _.find(desk, { id: deskId });
  };

  const deskPosition = deskId => {
    return _.find(studentDesk, { deskId: deskId }).positionId;
  };

  const studentAtDesk = (curDay, students) => {
    return _.filter(_.find(dailyData, {'date': curDay}).students, {'absent': false})
  }
  const findStudent = (studentId) => {
    return _.find(students, { id: studentId });
  };
  const testingThing = () => {
    // todayDesk()
    // debugger
  };

  const grabDays = dailyData.map(day => {
    console.log(day, "in grabdays");
    return (
      <a
        key={day.date}
        onClick={() => {
          setDay(day.date);
          setDaily([...day.students]);
          todayDesk(day.date);
          // setStudentDesk([...day.desks]);
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
  return (
    <div>
      <div>{grabDays}</div>
      <div>CURRENT DAY: {day}</div>
      {day !== "Please Select a Date" ? (
        <>
          <h1>Desks in Use:</h1>
          {/* {studentAtDesk(day, students)} */}
          {deskInUse().map(curDesk => {
            const curPos = deskPosition(curDesk.deskId);
            const curDetails = deskDetails(curDesk.deskId);
            // debugger
            const curStudentId = _.find(studentAtDesk(day,students), {'positionId': curPos }) === undefined ?  null :  _.find(studentAtDesk(day,students), {'positionId': curPos }).studentId 
            const curStudent = findStudent(curStudentId)

            return (
              <div className='border'>
                <Desk
                key={curDesk.deskId}
                user="test"
                pos={curPos}
                details={curDetails}
                daily={daily}
                desk={studentDesk}
                curStudent={curStudent}
              />
              </div>
            );
          })}
          <h1>Desks in Standby:</h1>
          {deskInStandby().map(curDesk => {
            const curPos = deskPosition(curDesk.deskId);
            const curDetails = deskDetails(curDesk.deskId);
            return (
              <div>
                <Desk
                key={curDesk.deskId}
                user="test"
                pos={curPos}
                details={curDetails}
                daily={daily}
                desk={studentDesk}
              />
              </div>
            );
          })}
          <h1>Desks in Repair:</h1>
          {deskInRepair().map(curDesk => {
            const curPos = deskPosition(curDesk.deskId);
            const curDetails = deskDetails(curDesk.deskId);
            return (
              <div>
                <Desk
                key={curDesk.deskId}
                user="test"
                pos={curPos}
                details={curDetails}
                daily={daily}
                desk={studentDesk}
              />
              </div>
              
            );
          })}
        </>
      ) : null}

      
    </div>
  );
}
