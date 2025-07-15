import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useEffect, useState } from "react";

import { signOut } from "firebase/auth";

export const Navbar = () => {
  const [user, setUser] = useState(auth.currentUser);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((newUser) => {
      setUser(newUser);
    });
    return () => unsubscribe();
  }, []);

  const userName = user?.displayName || "Guest";
  const userPhoto = user?.photoURL || "https://via.placeholder.com/40";

  const signUserOut = async() => {

    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  }

  return (
    <nav className="navbar">
      <div className="links">
        <Link to="/">Home</Link> |
        <Link to="/login">Login</Link> |
        <Link to="/contact">Contact</Link> |
        <Link to="/profile">Profile</Link>
      </div>

      {user && (
        <div className="user">
          <p>{userName}</p>
          <img src={userPhoto} alt="User" width="40" height="40" />
          <button onClick={() => auth.signOut()}>Logout</button>
        </div>
      )}
    </nav>
  );
};
