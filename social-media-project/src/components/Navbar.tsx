import { Link } from "react-router-dom";
import { auth } from "../config/firebase";

export const Navbar = () => {
  return (
    <nav className="navbar">
      
        <Link to="/">Home</Link> |
        <Link to="/login">Login</Link> |
        <Link to="/contact">Contact</Link>|
        <Link to="/profile">Profile</Link>
      

      <div>
        <p>
          {auth.currentUser ? `Welcome, ${auth.currentUser.displayName}` : "Please log in"}</p>

         <img src={auth.currentUser?.photoURL || " "} width="100" height="100"/>
      </div>

    </nav>
  );
}