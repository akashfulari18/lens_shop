import { UPDATE_USER } from "./auth.actionTypes";
import axios from "axios";
import { LOGIN_USER } from "./auth.actionTypes";
import { LOGOUT_USER } from "./auth.actionTypes";

export function updateUser(user) {

  return {
    type: UPDATE_USER,
    payload: { user },
  };

}

export function loginUser() {
	return {
	  type: LOGIN_USER
	}
  }

  export function logoutUser() {
	return {
	  type: LOGOUT_USER
	}
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
  console.log(temp);
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
