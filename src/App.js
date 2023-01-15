import React from "react";
import Header from "./Header";
import Main from "./Main";
import Field from "./Field";
import Footer from "./Footer";

function App() {
  //for change the Login module to Signup Module (Vice versa)
  const [page, setpage] = React.useState(true);

  function handlechange() {
    setpage((prevstate) => !prevstate);
    console.log(page);
  }

  // for store the data of users in state
  const [users, setusers] = React.useState({ email: "", password: "" });

  // for update the state of users of form with onchange
  function handleform(event) {
    setusers((prevform) => {
      return {
        ...prevform,
        [event.target.name]: event.target.value,
      };
    });
  }

  // for store array of users in state
  const [data, setdata] = React.useState([]);

  //for submit the form and update state of array of users state
  function handlesubmit(e) {
    if (page === false) {
      e.preventDefault();
      if (users.email === "" || users.password === "") {
        alert("All Field are Mandotary!");
        return;
      }
      setdata([users]);
      console.log([data]);
      alert("you successfully registered");
    } else {
      alert("You sucessfully Login");
    }
  }

  //set the local storage key
  const LOCAL_STORAGE_KEY = "data";

  // for store the data of userss in local storage
  React.useState(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
  }, [data]);

  //alert use in forget password
  function forgetpassword() {
    alert("You want to restore your password?");
  }

  return (
    <div className="App">
      <Header />
      <Main Menu={handlechange} page={page} />
      <Field
        state={page}
        handleform={handleform}
        value1={users.email}
        value2={users.password}
        handlesubmit={handlesubmit}
        forgetpassword={forgetpassword}
      />
      <Footer />
    </div>
  );
}

export default App;
