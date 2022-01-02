import React from 'react'
import Cookies from 'js-cookie'
import { Route } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import Layout from "../../layout/index";
import { encryptName } from "../../helpers/encryptions";

const AdminRoute = ({ path, component: Component, ...rest }) => {
	const User = Cookies.get(encryptName("User"));

	return (
		<>
			<Route
				{...rest}
				component={(props) =>
					User ? (
						path === "/login" ? (<Redirect to="/" />) : (
							<>
								<Layout>
									<Component {...props} />
								</Layout>
							</>
						)
					) : (
						path !== "/login" ? (<Redirect to="/login" />) : (
							<>
								<Layout>
									<Component {...props} />
								</Layout>
							</>
						)
					)
				}
			/>
		</>
	)
}
export default AdminRoute