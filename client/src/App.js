import "./App.css";
import LoginButton from "./components/loginButton";
import LogoutButton from "./components/logoutButton";
import UserProfile from "./components/userProfile";
import Header from "./components/header";
import Footer from "./components/footer";
import { useState } from "react";
import { useAuth0 } from '@auth0/auth0-react';
import PostBox from "./components/postbox";
import { Resizable } from 'react-resizable';

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [data, setData] = useState("");
  const [postData, setPostData] = useState([]);
  const maxDataLength = 280;

  const handleDataChange = (e) => {
    setData(e.target.value);
    // Axios call to send data to backend
    // let x = new Date();
  };

  const handleDataSubmit = (e) => {
    e.preventDefault();
    if (data.trim() && isAuthenticated) {
      setPostData((prevPostData) => [
        ...prevPostData, 
        { text: data, user }
      ]);
      setData("");
    }
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

        <div className="tweet-box">
          <form onSubmit={handleDataSubmit}>
            <textarea
              style={{ width: "100%", height: "100px" }}
              onChange={(e) => handleDataChange(e)}
              value={data}
              placeholder="Ready to Game?"
              maxLength={maxDataLength}
            />
            <div className="tweet-box-footer">
              <span className="char-count">{maxDataLength - data.length}</span>
              <button type="submit" disabled={!data.trim()}>Post</button>
            </div>
          </form>

          {postData.map((post, i) => (
            <div className="center-card-content" key={i}>
              <div className="card-header">
                <img
                  src={post.user.picture}
                  alt="profile"
                />
                <span>{post.user.name}</span>
              </div>
              <div className="card-body">{post.text}</div>
            </div>
          ))}
        </div>

        <div className="right-bar"></div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
