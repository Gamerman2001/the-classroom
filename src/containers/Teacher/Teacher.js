//Teacher component will show room #, 8 desk layout, sign out, present & absence
import React, { useEffect, useState } from "react";
import _ from "lodash";
import Desk from "../Desk/Desk";
import Student from "../Student/Student";

export default function Teacher(props) {
  const { dailyData, desk, positions, roomId, students } = props.room;
  const [absent, setAbsent] = useState([]);
  useEffect(() => {
    console.log(dailyData);
  }, []);
  //setting day to filter student and desk data passed down
  const [day, setDay] = useState("Please Select a Date");
  const [daily, setDaily] = useState(["Please Select a Date"]);
  const [studentDesk, setStudentDesk] = useState(["Please Select a Date"]);
  // const changeDay = changeDay => {
  //   setDay(changeDay.date);
  //   filterStudents();
  //   console.log(day,'day')
  // };
  //grabbing all the days and turning them into links that will be clicked on to update the current day
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
  //just found out about lodash, will test out library to see how it works for mapping over data.

  //   const findAbsent = (params) => {
  //     const absent = _.chain(dailyData).map('students').value()
  // debugger
  //     return console.log(absent, 'in absentee')
  //   }

  const findAbsent = () => {
    return _.filter(_.find(dailyData, { date: day })["students"], {
      absent: true
    });
  };

  const findStudent = studentId => {
    return _.find(students, { id: studentId });
  };

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
      {/* //display days from API */}
      <div>{grabDays}</div>

      <div>CURRENT DAY: {day}</div>
      {positions.map((pos, index) => {
        return (
          <Desk
            key={index}
            user="Teacher"
            day={day}
            dailyData={dailyData}
            daily={daily}
            students={students}
            findStudent={findStudent}
            desk={studentDesk}
            roomId={roomId}
            pos={pos}
          />
        );
      })}
      {day !== "Please Select a Date" ? (
        <div>
          <div>ABSENT</div>

          {findAbsent().map(({ studentId }) => {
            const currentStudent = findStudent(studentId);
            return <Student studentId={studentId} student={currentStudent} />;
          })}
        </div>
      ) : null}
    </div>
  );
}

// _.filter(users, ['active', false]);
// => objects for ['fred']

// The `_.property` iteratee shorthand.
// _.filter(users, 'active');
// => objects for ['barney']
