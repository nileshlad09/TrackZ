import React, { useState } from "react";
import userContext from "./userContext";

const UserState = (props) => {
  const userInitial = [];
  const roll = localStorage.getItem("trackzroll");
  const [notification, setNotification] = useState([]);
  const [user, setUser] = useState(userInitial);
  // console.log(roll);

  const getUser = async () => {
      const response = await fetch(
        `http://localhost:5000/api/userauth/getuser`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("trackztoken"),
          },
        }
      );
      const json = await response.json();
      setUser(json);
      const response2 = await fetch(
        `http://localhost:5000/api/alert/getalert2/${json._id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
        const json2 = await response2.json();
        setNotification(json2);
        console.log(json2);
    }

    const getUsersp = async ()=>{
      const response = await fetch(
        `http://localhost:5000/api/hawkerauth/getsp`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("trackztoken"),
          },
        }
      );
      const json = await response.json();
      setUser(json);
      const response2 = await fetch(
              `http://localhost:5000/api/alert/getalert/${json._id}`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
            const json2 = await response2.json();
            setNotification(json2);

  }

// const getNotification = async()=>{
//   if(localStorage.getItem("trackzroll") === 'cus'){
//     const response2 = await fetch(
//       `http://localhost:5000/api/alert/getalert2/${user._id}`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//       const json2 = await response2.json();
//       setNotification(json2);
//       console.log(json2);
//   }
//   else{
//     const response2 = await fetch(
//       `http://localhost:5000/api/alert/getalert/${user._id}`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     const json2 = await response2.json();
//     setNotification(json2);
//     } 
// }



const deleteAlert = async (id)=>{
  const response = await fetch(`http://localhost:5000/api/alert/deletealert/${id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const json = await response.json();
  const newnote = notification.filter((note)=>{return note._id!==id});
  setNotification(newnote)
}

const setStatus = async (id, Ustatus)=>{
  const response = await fetch(`http://localhost:5000/api/alert/update/${id}`,
    {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status2:Ustatus}),
    }
  );
  const json = await response.json();
}


const[alert,setAlert]=useState(null);
  const  showAlert=(type,message)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }





  return (
    <userContext.Provider value={{ user, notification,alert, getUser,getUsersp,setStatus, deleteAlert, showAlert }}>
      {props.children}
    </userContext.Provider>
  );
};

export default UserState;
