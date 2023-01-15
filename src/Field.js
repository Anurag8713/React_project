import React from "react";

export default function Field(props) {
  return (
    <div className="Field-container">
      <form onSubmit={props.handlesubmit}>
        <input
          type="email"
          className="Field-email"
          placeholder="Email Address"
          name="email"
          onChange={props.handleform}
          value={props.value1}
        />
        <input
          type="password"
          className="Field-password"
          placeholder="Password"
          name="password"
          onChange={props.handleform}
          value={props.value2}
        />
        {props.state ? (
          <button className="Field-button">LOGIN</button>
        ) : (
          <button className="Field-button" onSubmit={props.handlesubmit}>
            SIGNUP
          </button>
        )}
      </form>
      <a className="Field-link" onClick={props.forgetpassword}>
        Forget Password?
      </a>
    </div>
  );
}
