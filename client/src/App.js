import "./App.css";
import UserProfile from "./components/userProfile";
import Header from "./components/header";
import Footer from "./components/footer";
import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { format } from "date-fns";

function App() {
  const [data, setData] = useState("");
  const [postData, setPostData] = useState([]);

  const { user, isAuthenticated } = useAuth0();

  // first get request does the init load, the second is to refresh the data
  // to give the effect of live data coming in
  // setInterval is calling another  get request that runs every 4 seconds
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://lookingforgroup.onrender.com/users"
        );
        setPostData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();

    let get = () => {
      axios.get("https://lookingforgroup.onrender.com/users").then((res) => {
        // axios.get("http://localhost:3002/users").then((res) => {
        setPostData(res.data.data);
      });
    };
    setInterval(get, 4000);
  }, []);

  // Setting the data variable in the useState to the user input
  const handleChange = (e) => {
    setData(e.target.value);
  };

  // preventng the page from reloading after submitting the data
  // Getting the data from Auth0 and timestamping it.
  // Making a post request to send data to backend to store in Atlas DB
  const handleSubmit = (e) => {
    e.preventDefault();
    setData("");
    if (isAuthenticated) {
      let userData = {
        name: user.name,
        email: user.email,
        picture: user.picture,
        body: data,
        timestamp: new Date().toISOString(),
      };
      // take the current elements in postData copy with ... and append with data
      setPostData((prevData) => [userData, ...prevData]);
      axios
        .post("https://lookingforgroup.onrender.com/users/upload", userData)
        // .post("http://localhost:3002/users/upload", userData)
        .then((res) => {
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
      {/* Header Component */}
      <Header />
      <div className="content-Container">
        <div className="left-Container">
          <div className="login">
            <p>User Information!</p>
            {/* UserProfile Component */}
            <UserProfile />
          </div>
          <div className="info">
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

        <div className="right-Container">
          <div className="form-Container">
            <form onSubmit={handleSubmit}>
              <input
                onChange={(e) => handleChange(e)}
                value={data}
                placeholder="Create A Post!"
              />
              <Button type="submit" variant="primary">
                Post
              </Button>
            </form>
          </div>
          <div className="center-card-content-container">
            {/* if user is true, run the code 
            take the postData map through it and display the data in the give fields*/}
            {user &&
              postData.map((d, i) => {
                return (
                  <div className="center-card-content" key={i}>
                    <div className="card-header">
                      <img src={d.picture} alt="pic" />
                      <span className="usernames">
                        {d.name ? d.name : user.name}
                      </span>
                    </div>
                    <div className="card-body">{d.body ? d.body : data}</div>
                    <div className="card-footer">
                      <span className="time">
                        {format(new Date(d.timestamp), "PPpp")}
                      </span>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
