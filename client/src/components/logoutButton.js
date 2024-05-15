import { useAuth0 } from "@auth0/auth0-react";
import "./logoutButton.css";

function LogoutButton() {
  const { logout } = useAuth0();

  return (
    <button className="button2" onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>
  );
}

export default LogoutButton;
