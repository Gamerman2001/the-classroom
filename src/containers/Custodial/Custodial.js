//custodial page will show room number, 8 desk setup, custodial storage, signout , and desk information
import React, {useEffect} from 'react'


export default function Custodial(props) {
  const {dailyData, desk, positions, roomId} = props.room
  useEffect(() => {
    console.log(dailyData, desk, positions, roomId)
  }
  )
  return (
    <div>
      Custodial Component 
    </div>
  )
}
