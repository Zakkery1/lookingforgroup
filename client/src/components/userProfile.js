import { useAuth0 } from "@auth0/auth0-react";

function UserProfile() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <div>Loading!</div>;
  }

  // getting the user data from Auth0 after login, this only works if isAuthenticated is true
  return (
    isAuthenticated && (
      <div className="Auth">
        <img src={user.picture} alt="pic" />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
}

export default UserProfile;
