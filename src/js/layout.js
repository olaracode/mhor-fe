import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import injectContext from "./store/appContext";

import { Home } from "./views/home";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { SingleProduct } from "./views/singleProduct.jsx";
import { Cart } from "./views/cart.jsx";
import { Pedido } from "./views/pedido.jsx";
import { AllProducts } from "./views/allProducts.jsx";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/product/:modelo" element={<SingleProduct/>}/>
						<Route path="/cart" element={<Cart/>}/>
						<Route path="/pedido" element={<Pedido/>}/>
						<Route path="/all/:categoria" element={<AllProducts/>}/>
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
