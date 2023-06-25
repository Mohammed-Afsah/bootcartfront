import React, { useEffect, useState } from "react";
import './styles.css'; 

import {useNavigate} from "react-router-dom"
import { toast } from "react-hot-toast";

export default function Cart(){
  

  const [pId, setpId] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  

  const navigate = useNavigate();








  
  const handleSubmit = (e) => {
    e.preventDefault();
      console.log(pId, email,location);
      fetch("http://localhost:5000/cardItem", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          pId,
          email,
          location
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "cardItem");
          if (data.status === "ok") {
            toast("cardItem fetched");
            navigate("/UserDetails");
          } else {
            toast("Not fetched")
          }
        });
    }

     

 return (
  
    <div className="container py-5 px-5 bg"><br></br>
      <div className="row justify-content-between bg-white rounded-start-4">
        <div className="col-lg-7 d-flex justify-content-center align-items-center">
          <div className="login-card py-lg-0 py-5"><br></br>
            <h2 className="fw-semibold ">Welcome to BOOTCART</h2>
            <p className="fw-light">SELECTED ITEM</p>
      
            <form className="form" onSubmit={handleSubmit}>
              <div className="row">
         


                <div className="mb-3 col-12">
                  <label for="" className="mb-1 fw-medium">Product Id</label>
                  <input type="text" className="form-control" placeholder="Product Id" onChange={(e) => setpId(e.target.value)} />
                </div>
                <div className="mb-3 col-12">
                  <label for="" className="mb-1 fw-medium">Email</label>
                  <input type="email" className="form-control" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3 col-12">
                  <label for="" className="mb-1 fw-medium">Address</label>
                  <input type="text" className="form-control" placeholder="Enter Address" onChange={(e) => setLocation(e.target.value)} />
                </div>

              </div>
              <button type="submit" className="btn mt-4 w-100"><text className="color">Proceed to Buy</text></button>

            </form>
            <p className="text-center signup mt-4 ">Check Product Id?<a href="/"
              className="text-decoration-none fw-semibold">Go Back</a></p>
          </div>
        </div>

      </div>
    </div>

  )

}
