


import {ADD_TO_CART, UPDATE_USER, LOGIN_USER, LOGOUT_USER, UPDATE_TOTAL_PAYABLE } from "./auth.actionTypes";


var dummyUser = {
	id: 1,
	firstname: "akash ",
	lastname: "fulari",
	email: "akash@123.gmail.com",
	password: "akash123",
	isAuth: false,
	contact: "9898765743",
	wishlist: [],
	cart: [
		{
			id: "148659",
			qty: 2,
			image_url:
				"https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/blue-block-phone-&-computer-glasses:-blue-black-full-rim-rectangle-lenskart-air-flex-la-e13780-c1_lenskart-air-la-e13780-c1-eyeglasses_g_9954_123_02_2022.jpg",
			image_url_suffix:
				"/l/i/blue-block-phone-&-computer-glasses:-blue-black-full-rim-rectangle-lenskart-air-flex-la-e13780-c1_lenskart-air-la-e13780-c1-eyeglasses_g_9954_123_02_2022.jpg",
			imageUrls: [],
			product_url: "https://www.lenskart.com/lenskar-air-la-e13780-c1-pc-eyeglasses.html",
			color: "#0000ff",
			size: "Medium",
			width: "136 mm",
			brand_name: "Lenskart Air Computer Glasses",
			brand_name_en: "Lenskart Air Computer Glasses",
			brand_logo: "https://static.lenskart.com/media/wysiwyg/blanco/images/air-logo-Hi.jpg",
			model_name: "LA E13780",
			prices: [
				{
					name: "Market Price",
					currency_code: "INR",
					price: 3000,
				},
				{
					name: "Lenskart Price",
					currency_code: "INR",
					price: 1700,
				},
			],
			is_tbyb: false,
			tags: "Zero Power",
			color_options: [],
			totalColorAvailable: 0,
			is_ditto: true,
			sku: "eye:lenskart-air-la-e13780-c1-eye-dup",
			hover_image_url:
				"https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/blue-block-phone-&-computer-glasses:-blue-black-full-rim-rectangle-lenskart-air-flex-la-e13780-c1_lenskart-air-la-e13780-c1-eyeglasses_g_9953_123_02_2022.jpg",
			classification: "eyeframe",
			specifications: [],
			wishlistCount: 5803,
			purchaseCount: 2868,
			avgRating: 4.65,
			totalNoOfRatings: "123",
			hashtagList: [
				{
					name: "Medium",
					id: 11341,
					property: "frame_size_id",
				},
				{
					name: "Rectangle",
					id: 11345,
					property: "frame_shape_id",
				},
				{
					name: "Lenskart Air Computer Glasses",
					id: 22914,
					property: "brandname_id",
				},
				{
					name: "Full Rim",
					id: 11370,
					property: "frametype_id",
				},
			],
			offerName: "FESTIVE70",
			cmsLinkAndroid: "https://www.lenskart.com/cms-frame-size",
			cmsLinkIos: "https://www.lenskart.com/cms-frame-size-ios",
			arModelAndroidUrl:
				"https://3d-asset-lookr.s3-ap-southeast-1.amazonaws.com/frameassets/148659/android/sku_148659.glb",
			arModelIOSUrl:
				"https://3d-asset-lookr.s3-ap-southeast-1.amazonaws.com/frameassets/148659/ios/sku_148659.scn",
			arModelMsiteAndDesktopUrl: "",
			arModelOriginalUrl:
				"https://3d-asset-lookr.s3-ap-southeast-1.amazonaws.com/frameassets/148659/orignal/sku_148659.glb",
			frameColorImage:
				"https://ds-static.lenskart.com/product_color_bubble_images/148659_bubble.png",
			relatedItems: [],
			isCygnusEnabled: true,
		},
	],
};

const init = {

  isLoading: false,
  isError: false,

 
  isAuth: false,


  token: localStorage.getItem("token") || undefined,
  user: null, //default null

	
	totalPayable: 1000,

};

export const reducer = (state = init, { type, payload }) => {
	switch (type) {
		case LOGIN_USER:
			return {
				...state,
				isAuth: true,
			};
		case LOGOUT_USER:
			return {
				...state,
				isAuth: false,
				user: null,
			};
		case UPDATE_USER:
			return {
				...state,
				user: payload.user,
			};
		case UPDATE_TOTAL_PAYABLE:
			return {
				...state,
				totalPayable: payload.totalPayable,
			};
		default:
			return state;
	}
};

// dispatch(updateUser(userObject))
