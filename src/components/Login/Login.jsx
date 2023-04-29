import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
	return (
		<div className='form-container'>
			<h2 className='form-title'>Login</h2>
			<form action=''>
				<div className='form-control'>
					<label htmlFor=''>Email</label>
					<input type='email' name='email' required placeholder='email' />
				</div>
				<div className='form-control'>
					<label htmlFor=''>Password</label>
					<input
						type='password'
						name='password'
						required
						placeholder='password'
					/>
				</div>
				<input type='submit' value='Login' className='btn-submit' />
			</form>
			<p className='text-link'>
				<small>
					New to Ema John?
					<Link className='link' to='/signup'>
						{" "}
						Create an account
					</Link>
				</small>
			</p>
		</div>
	);
};

export default Login;
