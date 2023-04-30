import React, { useContext } from "react";
import { AuthContext } from "../components/Context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	const location = useLocation();
	console.log(location);

	if (loading) {
		return <div className='user-email'>"loading.."</div>;
	}

	if (user) {
		return children;
	}
	return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
};

export default PrivateRoutes;
