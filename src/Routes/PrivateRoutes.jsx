import React, { useContext } from "react";
import { AuthContext } from "../components/Context/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
	const { user, loading } = useContext(AuthContext);

	if (loading) {
		return <div className='user-email'>"loading.."</div>;
	}

	if (user) {
		return children;
	}
	return <Navigate to='/login'></Navigate>;
};

export default PrivateRoutes;
