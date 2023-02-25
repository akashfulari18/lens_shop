
import {ADD_TO_CART, UPDATE_USER, LOGIN_USER, LOGOUT_USER, UPDATE_TOTAL_PAYABLE } from "./auth.actionTypes";

import axios from "axios";

export function updateUser(user) {
	return {
		type: UPDATE_USER,
		payload: { user },
	};
}

export function updateTotalPayable(totalPayable) {
	return {
		type: UPDATE_TOTAL_PAYABLE,
		payload: { totalPayable },
	};
}

export function loginUser() {
	return {
		type: LOGIN_USER,
	};
}

export function logoutUser() {
	localStorage.clear();
	return {
		type: LOGOUT_USER,
	};
}


export function addProductToCart(user, product) {
  product.qty=1;
  user.cart.push(product);
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
				cart: user.cart,
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

export default function deleteAllProductsInCart() {
	return async function (dispatch) {
		let response = await axios({
			method: "patch",
			baseURL: "https://lesn-shop-server.onrender.com",
			url: "/users/" + user.id,
			headers: {
				"Content-Type": "application/json",
			},
			data: {
				cart: [],
			},
		});
		dispatch(updateUser(response.data));
	};

}
