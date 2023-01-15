import React from "react";

const Main = (props) => {
  const styles = {
    borderColor: props.page === true ? "#E70B89" : "#FFFFFF",
  };

  const styles1 = {
    borderColor: props.page === true ? "#FFFFFF" : "#E70B89",
  };

  return (
    <div className="Main-container">
      <h3 className="Main-option" style={styles} onClick={props.Menu}>
        Login
      </h3>
      <h3 className="Main-option1" style={styles1} onClick={props.Menu}>
        Signup
      </h3>
    </div>
  );
};

export default Main;
