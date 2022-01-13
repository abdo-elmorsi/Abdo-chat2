import React from 'react'
import { Route } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux';

const AdminRoute = ({ path, component: Component, ...rest }) => {
	const {user} = useSelector(state => state.auth)
	return (
		<>
			<Route
				{...rest}
				component={(props) =>
					user !== null ? (
						path === "/login" ? (<Redirect to="/" />) : (<Component {...props} />)) : 
						(path !== "/login" ? (<Redirect to="/login" />) : (<Component {...props} />))
				}
			/>
		</>
	)
}
export default AdminRoute