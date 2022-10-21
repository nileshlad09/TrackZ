import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange } from "@mui/material/colors";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
function ProfileUser() {
  const userInitial = [];
  const roll = localStorage.getItem("trackzroll")

  const [user, setUser] = useState(userInitial);
  const getUser = async () => {
    if(roll==='cus'){
      const response = await fetch(`http://localhost:5000/api/userauth/getuser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("trackztoken"),
        },
      });
      const json = await response.json();
      setUser(json);
    }
    else if(roll==='sp'){
      const response = await fetch(`http://localhost:5000/api/hawkerauth/getsp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("trackztoken"),
        },
      });
      const json = await response.json();
      setUser(json);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("trackztoken")) {
      getUser();
    }
  }, []);
  console.log(user);
  return (
    <div>
      <div style={{ padding: "20px" }}>
        <form class="row g-3">
          <Stack direction="row" spacing={2}>
            <Avatar sx={{ bgcolor: deepOrange[500] }}>{}</Avatar>
          </Stack>
          <h3>{user.name}</h3>
           {Object.keys(user).map(function(key) {
              return (
                <div class="col-md-4">
                  <label for="validationServer02" class="form-label">
                    {key}
                  </label>
                  <input
                    type="text"
                    class="form-control is-valid"
                    value={user[key]}
                    required
                  />
                </div>
              );
           })
            }
          {/* <Stack direction="row" spacing={2}>
            <Button variant="contained" href="#contained-buttons">
              Save Change
            </Button>
          </Stack> */}
        </form>
      </div>
    </div>
  );
}

export default ProfileUser;
