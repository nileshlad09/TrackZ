import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { BiMapPin } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { useEffect, useContext } from "react";
import userContext from "../../context/user/userContext";

export default function View() {
  const params = useParams();
  const name = params.name;

  const context = useContext(userContext);
  const { user,showAlert } = context;
  // console.log(user);

  const noteInitial = [];
  const [hawkers, setHawkers] = useState(noteInitial);
  const gethawkers = async () => {
    const response = await fetch(
      `http://localhost:5000/api/hawkers/allhawkers/${name}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json = await response.json();
    setHawkers(json);
  };
  // console.log(hawkers);
  useEffect(() => {
    gethawkers();
  }, []);

  const sendAlert = async (id) => {
    const response = await fetch(
      `http://localhost:5000/api/alert/alert/${id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: user._id }),
      }
    );
    const json = await response.json();
    console.log(json);
    if(json.success){
      showAlert("success","alert send successfully");
    }
    else{
      showAlert("danger","alert send alredy");
    }
  };
console.log(hawkers)
  return (
    <>
      <h3
        style={{
          textAlign: "center",
          color: "brown",
          marginTop: "5px",
          fontWeight: "500",
        }}
      >
        {name}
      </h3>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          padding: "10px",
        }}
      >
        {hawkers.map((h) => {
          return (
            <Card
              key={h._id}
              sx={{ width: "300px", maxWidth: "100%", margin: "20px" }}
            >
              <CardContent
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "left",
                      flexWrap: "wrap",
                    }}
                  >
                   {h.name}
                   {" "}
                   ({h.pinCode})
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {h.city}
                    <BiMapPin />
                  </Typography>
                </div>
              </CardContent>

              <CardActions>
                <Stack
                  direction="row"
                  spacing={2}
                  style={{ marginLeft: "10px" }}
                >
                  <Button
                    onClick={() => sendAlert(h._id)}
                    variant="outlined"
                    color="error"
                  >
                    Alert
                  </Button>
                </Stack>
              </CardActions>
            </Card>
          );
        })}
      </div>
    </>
  );
}
