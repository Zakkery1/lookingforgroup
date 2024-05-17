import "./App.css";
import LoginButton from "./components/loginButton";
import LogoutButton from "./components/logoutButton";
import UserProfile from "./components/userProfile";
import Header from "./components/header";
import Footer from "./components/footer";
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

<<<<<<< Updated upstream
import { useState } from "react";
import { Resizable } from 'react-resizable';

=======
>>>>>>> Stashed changes

function App() {
  const [data, setData] = useState("");
  const [postData, setPostData] = useState([]);

  const { user, isAuthenticated } = useAuth0();

  useEffect(() => {
    axios.get("http://localhost:3002/users").then((res) => {
      setPostData(res.data.data);
    });
<<<<<<< Updated upstream
=======

    let get = () => {
      axios.get("http://localhost:3002/users").then((res) => {
        setPostData(res.data.data);
      });
    }
    setInterval(get, 4000);
>>>>>>> Stashed changes
  }, []);

  const handleChange = (e) => {
    setData(e.target.value);
<<<<<<< Updated upstream
    //Axios call to send data to backend
    //let x = new Date();
=======
>>>>>>> Stashed changes
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData("");
    if (isAuthenticated) {
      let userData = {
        name: user.name,
        email: user.email,
        picture: user.picture,
        body: data,
      };
      // take the current elements in postData copy with ... and append with data
      setPostData((prevData) => [userData, ...prevData]);
      axios.post("http://localhost:3002/users/upload", userData).then((res) => {
        console.log(res.data, "postdata");
      });
      console.log(postData);
      console.log("True");
    } else {
      console.log("false");
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="Content">
        <div className="left-bar">
          <h1>Information</h1>
          {/* if isAuthenticated is truthy return logout else return login */}
          {isAuthenticated ? <LogoutButton /> : <LoginButton />}
          <p>User Information!</p>
          <UserProfile />
        </div>

        <div className="center-content">
          <form onSubmit={handleSubmit}>
          <Resizable defaultSize={{ width: 300, height: 200 }} minConstraints={[100, 100]} maxConstraints={[500, 500]}
              onChange={(e) => handleChange(e)}
              value={data}

              placeholder="Create A Post!"
            />
            {/* <button type="submit">Post</button> */}
            <Button type="submit" variant="primary">
              Post
            </Button>{" "}
<<<<<<< Updated upstream

              placeholder="Create A Post!" />
            <button type="submit">Post</button>

=======
>>>>>>> Stashed changes
          </form>
          {user &&
            postData.map((d, i) => {
              return (
<<<<<<< Updated upstream
                <div className="center-card-content" key={i}>
                  <div className="card-header">
                    <img src={d.picture} alt="pic" />
                    <span>{d.name ? d.name : user.name}</span>
                  </div>
                  {/* if d.body returns falsy or null/empty string use data */}
                  <div className="card-body">{d.body ? d.body : data}</div>
                </div>
=======
                  <div className="center-card-content" key={i}>
                    <div className="card-header">
                      <img src={d.picture} alt="pic" />
                      <span>{d.name ? d.name : user.name}</span>
                    </div>
                    {/* if d.body returns falsy or null/empty string use data */}
                    <div className="card-body">{d.body ? d.body : data}</div>
                  </div>
>>>>>>> Stashed changes
              );
            })}
        </div>

        <div className="right-bar">
        <h1>Instructions</h1>
        <p>Log in!</p>
        <p>Specify the game your playing!</p>
        <p>Make sure you to put your username that you use in game!</p>


        <h1>RULES</h1>
          <p>1.No foul/offensive language</p>
          <p>2.Be respectful in game</p>
          <p>3.No cheating/hacking</p>
          <p>4.Most important. HAVE FUN AND WIN TOGETHER</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
