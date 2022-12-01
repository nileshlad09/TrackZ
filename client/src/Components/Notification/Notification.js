import * as React from "react";
import List from "@mui/material/List";

import { useContext } from "react";
import userContext from "../../context/user/userContext";
import NotificationItem from "./NotificationItem";
import { useEffect } from "react";

export default function Notification() {
  const context = useContext(userContext);
  const { notification } = context;  
  const { getUser, getUsersp } = context;
  useEffect(()=>{
    if (localStorage.getItem("trackzroll") === "cus") {
        getUser();
    }
    else{
       getUsersp();
    }
  }, []);
  
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: "100%",
        bgcolor: "background.paper",
        margin: "auto",
      }}
    > 
         {
         notification.length > 0 ? notification.map((n) => {
            return(
              <NotificationItem key={n._id} n={n}/>
            )
          }):
            <h3 style={{textAlign:"center"}}>No notification found</h3>
          }
      
    </List>
  );
}
