import "./App.css";
import LoginButton from "./components/loginButton";
import LogoutButton from "./components/logoutButton";
import UserProfile from "./components/userProfile";
import Header from "./components/header";
import Footer from "./components/footer";
import { useState } from "react";
import { Resizable } from 'react-resizable';

function App() {
  const [data, setData] = useState("");
  const [postData, setPostData] = useState([]);

  const handleChange = (e) => {
    setData(e.target.value);
    //Axios call to send data to backend
    let x = new Date();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData("");
    // take the current elements in postData copy with ... and append with data
    setPostData((prevData) => [...prevData, data]);
  };

  return (
    <div className="App">
      <Header />
      <div className="Content">
        <div className="left-bar">
          <h1>Information</h1>
          <LoginButton />
          <LogoutButton />
          <p>User Information!</p>
          <UserProfile />
        </div>

        <div className="center-content">
          <form onSubmit={handleSubmit}>
          <Resizable defaultSize={{ width: 300, height: 200 }} minConstraints={[100, 100]} maxConstraints={[500, 500]} >
            <input
              style={{ width: "100%", height: "100px" }}
              onChange={(e) => handleChange(e)}
              value={data}
              placeholder="Create A Post!"
            />
            </Resizable>
            <button type="submit">Post</button>
          </form>
          {postData.map((d, i) => {
            return (
              <div className="center-card-content" key={i}>
                <div className="card-header">
                  <img
                    src="https://cdn.pixabay.com/photo/2017/02/07/16/47/kingfisher-2046453_1280.jpg"
                    alt="pic"
                  />
                  <span> UserName</span>
                </div>
                <div className="card-body">{d}</div>
              </div>
            );
          })}
        </div>

        <div className="right-bar"></div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
