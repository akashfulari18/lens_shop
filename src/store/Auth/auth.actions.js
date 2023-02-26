import {
	ADD_TO_CART,
	UPDATE_USER,
	LOGIN_USER,
	LOGOUT_USER,
	UPDATE_TOTAL_PAYABLE,
} from "./auth.actionTypes";
import axios from "axios";
import { json } from "react-router-dom";

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


export const updateIsAuth =async(user)=>{
	
	if(!user?.isAuth){
		
		await axios.patch(`https://lesn-shop-server.onrender.com/users/${user.id}`,{...user,isAuth:true}).then((res)=>console.log(res)).catch(e=console.log(e))     
    }

	// console.log("user",user)


  }
export const updateIsAuthLogout =  async(user)=>{
	
	console.log("user",user)
	if(user?.isAuth){
		
		await axios.patch(`https://lesn-shop-server.onrender.com/users/${user.id}`,{...user,isAuth:false}).then((res)=>console.log(res)).catch(e=console.log(e))    
    }



  }




export function logoutUser() {
    
	localStorage.clear();
	return {
		type: LOGOUT_USER,
	};
}

export function addProductToCart(user, product) {
	product.qty = 1;
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


export function deleteAllProductsInCart(user) {
	if (user.orders == undefined) {
		user.orders = [];
	}
	user.orders = [...user.orders, ...user.cart];
	user.cart = [];



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
				orders: user.orders,
			},
		});
		dispatch(updateUser(response.data));
	};
}
