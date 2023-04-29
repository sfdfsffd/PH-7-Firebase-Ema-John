import React, { useContext, useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const SignUp = () => {
	const { createUser } = useContext(AuthContext);
	const [error, setError] = useState("");

	const handleSignUp = (event) => {
		setError("");
		event.preventDefault();
		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;
		const confirmPassword = form.passwordConfirm.value;
		// console.log(email, password, confirmPassword);

		if (password !== confirmPassword) {
			setError("Your password did not match");
			return;
		} else if (password.length < 6) {
			setError("Your password should be min 6 char");
			return;
		}

		createUser(email, password)
			.then((result) => {
				const loggedUser = result.user;
				console.log(loggedUser);
			})
			.catch((error) => {
				console.log(error);
				setError(error.message);
			});
		form.reset();
	};
	return (
		<div className='form-container'>
			<h2 className='form-title'>Sign Up Now !</h2>
			<form action='' onSubmit={handleSignUp}>
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
						name='passwordConfirm'
						required
						placeholder='confirm password'
					/>
				</div>
				{
					<p className='error-text'>
						<small>{error}</small>
					</p>
				}
				<input type='submit' value='Sign Up' className='btn-submit' />
			</form>
			<p className='text-link'>
				<small>
					Already have an account?{" "}
					<Link className='link' to='/login'>
						Login
					</Link>
				</small>
			</p>
		</div>
	);
};

export default SignUp;
