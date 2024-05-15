import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useEffect } from "react";

function UserProfile() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  // console.log(user.picture);

  function post() {
    if (isAuthenticated) {
      axios.post("http://localhost:3002/users/upload", user).then((res) => {
        console.log(res.data, "postdata");
      });
      console.log("True");
    } else {
      console.log("false");
    }
  }

  // axios.get("http://localhost:3002/users").then((res) => {
  //   console.log(res.data, "getdata");
  // });

  useEffect(() => {
    post();
  }, []);

  if (isLoading) {
    return <div>Loading!</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt="pic" />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
}

export default UserProfile;
