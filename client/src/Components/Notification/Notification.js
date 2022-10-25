import * as React from "react";
import List from "@mui/material/List";

import { useContext } from "react";
import userContext from "../../context/user/userContext";
import NotificationItem from "./NotificationItem";
import { useEffect } from "react";

export default function Notification() {
  const context = useContext(userContext);
  const { notification, getNotification } = context;
  useEffect(()=>{
      getNotification()
    console.log("useEffect in notification")
  },[])
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: "100%",
        bgcolor: "background.paper",
        margin: "auto",
      }}
    >
      {notification.map((n) => {
        return (
          <>
          <NotificationItem key={n._id} n={n}/>
          </>
        );
      })}
    </List>
  );
}
