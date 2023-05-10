import React from "react";
import { Link } from "react-router-dom";
import { OffCanvas } from "./OffCanvas.jsx";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
			<div className="container-fluid">
				<Link to={"/"} className="navbar-brand">MHOR</Link>
				<div className="d-flex">
					<Link to={'/cart'} className="mt-2" style={{"textDecoration": "none", "color": "black"}}>
						<span>0</span>
						<i className="fa-solid fa-bag-shopping mx-2" style={{"color": "#000000"}}></i>
					</Link>
					<OffCanvas/>
				</div>
			</div>
		</nav>
	);
};
