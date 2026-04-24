import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import '../styles/navbar.css';
import { Link } from 'react-router-dom';
import { logout } from '../actions/userActions';

const Navbar = () => {
  const { user } = useSelector(state => state.user);
  const [open, setOpen] = useState(false);
  const dispatch=useDispatch();
  return (
    <div className="head">

      <a href="/" className="logo">Logo</a>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/theatres">Theatres</Link>
        <Link to="/food">Food</Link>
      </nav>

      {/* USER / LOGIN SECTION */}
      <div className="user-section">
        {user ? (
          <div className="dropdown">
         <p
  className="name" onClick={dispatch(logout)}
>
  {user.name}⌄  
</p>


            {open && (
              <div className="dropdown-menu">
                <Link to="/profile">Profile</Link>
                <Link to="/orders">My Orders</Link>
                <button className="logout-btn">Logout</button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login" className="login">Login</Link>
        )}
      </div>

    </div>
  );
};

export default Navbar;
