//Teacher component will show room #, 8 desk layout, sign out, present & absence 
import React, {useEffect} from 'react'

export default function Teacher(props) {
  const {dailyData, desk, positions, roomId} = props.room
  useEffect (()=>{
    console.log(dailyData, desk, positions, roomId, 'this is coming from Teacher')
  }) 

  
  return (
    <div>
      Teacher Component
    </div>
  )
}
