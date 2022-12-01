import React, { useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange } from "@mui/material/colors";
import {useContext} from "react";
import userContext from "../../context/user/userContext";
function ProfileUser() {
  const context = useContext(userContext);
  const { user, getUser, getUsersp } = context;
  useEffect(()=>{
      if (localStorage.getItem("trackzroll") === "cus") {
          getUser();
      }
      else{
         getUsersp();
      }
  }, []);
  return (
    <div>
      <div style={{ padding: "20px" }}>
        <form className="row g-3">
          <Stack direction="row" spacing={2}>
            <Avatar sx={{ bgcolor: deepOrange[500] }}>{}</Avatar>
          </Stack>
          <h3>{user.name}</h3>
           {Object.keys(user).map(function(key) {
            if(key !== '_id' && key!=="alert"){
              return (
                <div className="col-md-4" >
                  <label htmlFor="validationServer02" className="form-label">
                    {key}
                  </label>
                  <input
                    type="text"
                    className="form-control is-valid"
                    value={user[key]}
                    required
                    readOnly
                  />
                </div>
              );
        }})
      
          }
        </form>
      </div>
    </div>
  );
}

export default ProfileUser;
