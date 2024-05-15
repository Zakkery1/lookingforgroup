import { useAuth0 } from "@auth0/auth0-react";
import "./loginButton.css";

function LoginButton() {
  const { loginWithRedirect } = useAuth0();

  return <button className="button" onClick={() => loginWithRedirect()}>Log In</button>;
}

export default LoginButton;
