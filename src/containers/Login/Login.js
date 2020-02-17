import React, { useEffect, useState } from "react";
import { Button } from "semantic-ui-react";
import Teacher from "../Teacher/Teacher";
import Custodial from "../Custodial/Custodial";
import { Link } from "react-router-dom";

export default function Login(props) {
  const [view, setView] = useState({ teacher: false, custodial: false });
  const { dailyData, desk, positions, roomId, students } = props;
  // useEffect(() => {
  //   console.log(dailyData, desk, positions, roomId);
  // });
  return (
    <div>
      <Button
        onClick={() => setView({ ...view, teacher: true, custodial: false })}
        color="orange"
      >
        Teacher
      </Button>
      <Button
        onClick={() => setView({ ...view, custodial: true, teacher: false })}
        color="teal"
      >
        Custodial
      </Button>

      {view.teacher ? (
        <Teacher room={{ dailyData, desk, positions, roomId, students }} />
      ) : null}
      {view.custodial ? (
        <Custodial room={{ dailyData, desk, positions, roomId, students }} />
      ) : null}
    </div>
  );
}
