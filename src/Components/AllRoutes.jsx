import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Cart from "../Pages/Cart";
import Checkout from "../Pages/Checkout";

const AllRoutes = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/computer_glasses"></Route>
				<Route path="/kids_glasses"></Route>
				<Route path="/cart" element={<Cart />}></Route>
				<Route path="/checkout" element={<Checkout />}></Route>
				<Route path="/*" element={<h1>Page Not Found</h1>}></Route>
			</Routes>
		</div>
	);
};

export default AllRoutes;
