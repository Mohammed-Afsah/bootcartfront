import React, { useEffect, useState } from "react";
import style from "./style.css";

export default function UserHome({ userData }) {
  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./sign-in";
  };

  //setting state
  const [data, setData] = useState([

  ]);

  useEffect(() => {
    getAllUser();

  }, []);
  const getAllUser = () => {
    fetch("http://localhost:5000/getItems", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        setData(data.data);
      });
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <br />
        <img src={userData.profileImage} />
        <br />
        <h1>Name: {userData.fname}</h1>
        <h1>Email: {userData.email}</h1>
        <br></br>
        <strong>Ordered Items Are:</strong>
        {data.map((i) => {
  const itemName = i.name;
  return (
    <div key={i.id}>
      <div>Product id #<strong>{i.id}</strong> {itemName}</div>
      <div>Price{i.MRP}</div><br></br>
    </div>
  );
})}


        <button onClick={logOut} className="btn btn-primary">
          Log Out
        </button>
      </div>
    </div>
  );
}
