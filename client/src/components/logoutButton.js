import { useAuth0 } from "@auth0/auth0-react";
import Button from "react-bootstrap/Button";

function LogoutButton() {
  const { logout } = useAuth0();

  return (
    // <button onClick={() => logout({ returnTo: window.location.origin })}>
    //   Log Out
    // </button>
    <Button
      onClick={() => logout({ returnTo: window.location.origin })}
      variant="primary"
    >
      Log Out
    </Button>
  );
}

export default LogoutButton;
