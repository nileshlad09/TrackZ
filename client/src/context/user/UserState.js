import React, { useState } from 'react'
import userContext from "./userContext";

const UserState = (props) => {
    const noteInitial = []
    const [hawkers, setHawkers] = useState(noteInitial)

    const gethawkers= async()=>{
      const response = await fetch(`http://localhost:5000/api/hawkers/allhawkers/raddiwala`, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const json = await response.json()
      setHawkers(json)
    }
  return (
    <userContext.Provider value={{hawkers, gethawkers}}>
            {props.children}
    </userContext.Provider>
  )
}

export default UserState
