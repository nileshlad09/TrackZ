import React, { useState } from "react";
import userContext from "./userContext";

const UserState = (props) => {
  const userInitial = [];
  const roll = localStorage.getItem("trackzroll");
  const [notification, setNotification] = useState([]);
  const [user, setUser] = useState(userInitial);
  console.log(roll);

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
      console.log(json);
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
  }

const getNotification = async()=>{
  if(localStorage.getItem("trackzroll") === 'cus'){
    const response2 = await fetch(
      `http://localhost:5000/api/alert/getalert2/${user._id}`,
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
  else{
    const response2 = await fetch(
      `http://localhost:5000/api/alert/getalert/${user._id}`,
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
}


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
  console.log(json)
  const newnote = notification.filter((note)=>{return note._id!==id});
  setNotification(newnote)
  console.log("deleted");
}


  return (
    <userContext.Provider value={{ user, notification, getUser, getNotification,getUsersp, deleteAlert }}>
      {props.children}
    </userContext.Provider>
  );
};

export default UserState;
