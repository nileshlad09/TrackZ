import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect, useContext } from "react";
import userContext from "../../context/user/userContext";

export default function View() {
  const params = useParams();
  const name = params.name;

  const context = useContext(userContext);
  const { user, showAlert } = context;
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
        body: JSON.stringify({ userId: user._id , status: "Sent"}),
      }
    );
    const json = await response.json();
    // console.log(json);
    if (json.success) {
      showAlert("success", "alert send successfully");
    } else {
      showAlert("danger", "alert send alredy");
    }
  };
  // console.log(hawkers);
  return (
    hawkers && <>
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
        className="Viewcontainer"
        style={{
          display: "flex",
          justifyContent: "center",
          // flexWrap: "wrap",
          gap: "30px",
          marginTop:"90px"
        }}
        
      >
        {hawkers.map((h) => {
          return (
        <div
          className="card"
          style={{
            margin: "5px",
            outline: "none",
            boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 8px",
            width: "20rem",
          }}
          key={h._id}
        >
          <div className="card-body">
            <h5 className="card-title">{h.name.charAt(0).toUpperCase() + h.name.slice(1)}</h5>
            <p className="card-text">
              City: {h.city}
              <br />
              Pin Code: {h.pinCode}
            </p>
            {localStorage.getItem('trackzroll')==="cus" &&
            <button style={{marginRight: "43%"}} className="btn btn-primary"
                onClick={() => sendAlert(h._id)}>Alert</button>
        }
          </div>
        </div>
      );
    })}
    </div>
    </>
  );
}
