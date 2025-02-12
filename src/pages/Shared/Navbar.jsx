 import logo from "../../assets/logo.svg"
import { Link } from 'react-router-dom';
import useAuth from "../../hook/useAuth"; 

const Navbar = () => {
  const { user, logOut } = useAuth()

  const handleLogOut = () => {
    logOut()
        .then(() => {})
        .catch((error) => console.log(error))
  }

    const navItems = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="">About</Link></li>
    <li><Link to="">Services</Link></li>
    <li><Link to="">Blog</Link></li>
    <li><Link to="">Contact</Link></li>
    {user? 
    <li><Link to="/orderBook">Order Book</Link></li> : <></>
    }
    </>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {navItems}
      </ul>
    </div>
    <Link to={'/'} className="">
    <img className='w-20' src={logo} alt="" />
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
       {navItems}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn btn-outline text-[#FF3811] hover:bg-[#FF3811] hover:border-[#FF3811]">Appointment</a>
   {user?
    <button onClick={handleLogOut} className="btn btn-outline text-[#FF3811] hover:bg-[#FF3811] hover:border-[#FF3811]">Logout</button> : <Link to={'/login'} className="btn btn-outline text-[#FF3811] hover:bg-[#FF3811] hover:border-[#FF3811]">Login</Link>}
  </div>
</div>
    );
};

export default Navbar;