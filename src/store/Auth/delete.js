import axios from "axios";

axios({
	method: "patch",
	baseURL: "https://lesn-shop-server.onrender.com",
	url: "/users/" + 1,
	headers: {
		"content-type": "application/json",
	},
	data: {
		cart: [{ id: 37 }],
	},
}).then((response) => console.log(response));
