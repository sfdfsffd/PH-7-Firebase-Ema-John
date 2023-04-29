import React, { useContext } from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const Header = () => {
	const { user } = useContext(AuthContext);
	return (
		<nav className='header'>
			<img src={logo} alt='' />
			<div>
				<Link to='/'>Shop</Link>
				<Link to='/order-review'>Order Review</Link>
				<Link to='/inventory'>Manage Inventory</Link>
				<Link to='/login'>Login</Link>
				<Link to='/signup'>Sign up</Link>
				{user.displayName}
			</div>
		</nav>
	);
};

export default Header;
