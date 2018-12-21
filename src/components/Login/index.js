import React from "react";

const Login = ({ auth }) => (
  <div style={{ padding: "24px" }}>
    <p> You're not logged in. </p>
    <button className="btn btn-primary" onClick={auth.login}>
      Login
    </button>
  </div>
);

export default Login;
