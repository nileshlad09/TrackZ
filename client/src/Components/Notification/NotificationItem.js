import React, { useEffect, useState } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
// import {format} from 'timeago.js'
// eslint-disable-next-line
import { useContext } from "react";
import userContext from "../../context/user/userContext";
const NotificationItem = (props) => {
  const {n}= props;
  const context = useContext(userContext);
  const { deleteAlert, showAlert } = context;

  const [notification, setNotification] = useState([]);
  const roll = localStorage.getItem("trackzroll");
  useEffect(() => {   
  const func1 = async () => {
    if(roll === "sp"){
    const response = await fetch(`http://localhost:5000/api/userauth/getuser2/${n.alertFrom}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json = await response.json();
    setNotification(json);
  }
  else if(roll==="cus"){
    const response = await fetch(`http://localhost:5000/api/hawkerauth/getsp2/${n.alertTo}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json = await response.json();
    setNotification(json);
  }
}
    func1();
  }, [n.alertFrom]);

  const deleteAlert2 = ()=>{
    deleteAlert(n._id)
    showAlert("success","Alert deleted successfully")
  }
  console.log(notification.length) 
  return (
    <div>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" />
        </ListItemAvatar>
        <ListItemText
          primary={`${notification.name}  (pincode:- ${notification.pinCode})`}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
                marginRight="10px"
              >
                {notification.city}
              </Typography>

              {notification.address}
            </React.Fragment>
          }
        />
        {(roll==="cus") &&
          <Button variant="contained"  onClick={deleteAlert2}>
              Done
          </Button>
        }
      </ListItem>
      <hr />
    </div>
  );
};

export default NotificationItem;
