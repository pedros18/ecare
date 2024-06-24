import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";

const SomeComponent = () => {
  const { user, isLoading, signInWithGoogle, signOut } = useContext(AuthContext);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {user ? (
        <>
          <p>Welcome, {user.displayName || 'User'}</p>
          <p>Email: {user.email || 'No Email'}</p>
          <button onClick={signOut}>Sign Out</button>
        </>
      ) : (
        <button onClick={signInWithGoogle}>Sign In with Google</button>
      )}
    </div>
  );
};

export default SomeComponent;
