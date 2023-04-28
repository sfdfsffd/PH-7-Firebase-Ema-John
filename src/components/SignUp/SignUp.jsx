import React from "react";
import "./SignUp.css";

const SignUp = () => {
	return (
		<div className='form-container'>
			<h2 className='form-title'>Sign Up Now !</h2>
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
				<div className='form-control'>
					<label htmlFor=''>Confirm Password</label>
					<input
						type='password'
						name='confirm-password'
						required
						placeholder='confirm password'
					/>
				</div>
				<input type='submit' value='Sign Up' className='btn-submit' />
			</form>
		</div>
	);
};

export default SignUp;
