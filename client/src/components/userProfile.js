import { useAuth0 } from "@auth0/auth0-react";

function UserProfile() {
  const { user, isAuthenticated, isLoading } = useAuth0();
<<<<<<< Updated upstream

=======
  console.log(user)
>>>>>>> Stashed changes
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
