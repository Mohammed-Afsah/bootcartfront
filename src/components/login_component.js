import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import './style.css';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    console.log(email, password);
    fetch("http://localhost:5000/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          toast("login successful");
          window.localStorage.setItem("token", data.data);
          const { redirectUrl } = data;

          // Redirect the user to the home page
          navigate(redirectUrl);
          window.localStorage.setItem("loggedIn", true);
        } else {
          toast("user not found");
        }
      });
  }

  return (
    <div className="container py-5 px-5 bg">
      <br />
      <div className="row justify-content-between bg-white rounded-start-4">
        <div className="col-lg-7 d-flex justify-content-center align-items-center">
          <div className="login-card py-lg-0 py-5">
            <br />
            <h2 className="fw-semibold">Welcome to BOOTCART</h2>
            <p className="fw-light">Please login to your Account</p>
            <form className="form" onSubmit={handleSubmit}>
              <div className="row">
                <div className="mb-3 col-12">
                  <label htmlFor="" className="mb-1 fw-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="" className="mb-1 fw-medium">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <button type="submit" className="btn mt-4 w-100">
                <text className="color">Sign in</text>
              </button>
            </form>
            <p className="text-center signup mt-4">
              Don't have an account?{" "}
              <a href="/sign-up" className="text-decoration-none fw-semibold">
                Sign up now
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
