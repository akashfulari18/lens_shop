import { UPDATE_USER } from "./auth.actionTypes";
import axios from "axios";

export function updateUser(user) {
	// when user login
	// when cart item qty changes
	return {
		type: "UPDATE_USER",
		payload: { user },
	};
}

export function updateProductQty(product, user, qty) {
	for (let productInCart of user.cart) {
		if (productInCart.id == product.id) {
			productInCart.qty = qty;
		}
	}
	return async function (dispatch) {
		let response = await axios({
			method: "patch",
			baseURL: "https://lesn-shop-server.onrender.com",
			url: "/users/" + user.id,
			headers: {
				"Content-Type": "application/json",
			},
			data: {
				"cart": user.cart,
			},
		});
		dispatch(updateUser(response.data));
	};
}

export function deleteProduct(product, user) {
	let temp = [];
	for (let productInCart of user.cart) {
		if (productInCart.id == product.id) {
			continue;
		}
		temp.push(productInCart);
	}
	user.cart = temp;
	console.log(temp)
	return async function (dispatch) {
		let response = await axios({
			method: "patch",
			baseURL: "https://lesn-shop-server.onrender.com",
			url: "/users/" + user.id,
			headers: {
				"Content-Type": "application/json",
			},
			data: {
				cart: user.cart,
			},
		});
		dispatch(updateUser(response.data));
	};
}
