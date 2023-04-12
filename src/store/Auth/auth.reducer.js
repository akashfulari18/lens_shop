import {
  ADD_TO_CART,
  UPDATE_USER,
  LOGIN_USER,
  LOGOUT_USER,
  UPDATE_TOTAL_PAYABLE,
} from "./auth.actionTypes";

const user = JSON.parse(localStorage.getItem("user"));

const init = {
  isLoading: false,
  isError: false,
  isAuth: user?.firstname || false,
  token: localStorage.getItem("token") || undefined,
  user: user || null, //default null
  totalPayable: 1000,
};

export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case LOGIN_USER:
      return {
        ...state,
        isAuth: true,
        user: { ...state.user, isAuth: true },
      };
    case LOGOUT_USER:
      localStorage.removeItem("user");
      return {
        ...state,
        isAuth: false,
        user: null,
      };
    case UPDATE_USER:
      // console.log("res",payload.user)
      
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

function getDummyUser() {
  return {
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
        product_url:
          "https://www.lenskart.com/lenskar-air-la-e13780-c1-pc-eyeglasses.html",
        color: "#0000ff",
        size: "Medium",
        width: "136 mm",
        brand_name: "Lenskart Air Computer Glasses",
        brand_name_en: "Lenskart Air Computer Glasses",
        brand_logo:
          "https://static.lenskart.com/media/wysiwyg/blanco/images/air-logo-Hi.jpg",
        model_name: "LA E13780",
        price: 3000,
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
        product_name: "Black Blue Transparent Full Rim Rectangle Eyeglasses",
        category: "all_computer_glasses",
      },
      {
        id: "207491",
        qty: 3,
        image_url:
          "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/peyush-bansal-shark-tank-sand-dune-full-rim-hustlr-eyeglasses_g_7873_23_12_202230_dec22.jpg",
        image_url_suffix:
          "/l/i/peyush-bansal-shark-tank-sand-dune-full-rim-hustlr-eyeglasses_g_7873_23_12_202230_dec22.jpg",
        imageUrls: [],
        product_url:
          "https://www.lenskart.com/lenskart-blu-lb-e14058-c21-eyeglasses.html.html",
        color: "#e9df97",
        size: "Medium",
        width: "139 mm",
        suited_for: "",
        brand_name: "LENSKART HUSTLR",
        brand_name_en: "LENSKART HUSTLR",
        model_name: "LB E14058-H",
        price: 2500,
        is_tbyb: false,
        tags: "Shark Tank",
        color_options: [
          {
            id: "207491",
            product_url:
              "https://www.lenskart.com/lenskart-blu-lb-e14058-c21-eyeglasses.html.html",
            image_urls: [
              "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/peyush-bansal-shark-tank-sand-dune-full-rim-hustlr-eyeglasses_g_7873_23_12_202230_dec22.jpg",
            ],
            brand_name: "LENSKART HUSTLR",
            model_name: "LB E14058-H",
            prices: [
              {
                name: "Market Price",
                currency_code: "INR",
                price: 2500,
              },
              {
                name: "Lenskart Price",
                currency_code: "INR",
                price: 2500,
              },
            ],
            color: "#e9df97",
            colorId: 26082,
            arModelAndroidUrl:
              "https://3d-asset-lookr.s3-ap-southeast-1.amazonaws.com/frameassets/207491/android/sku_207491.glb",
            arModelIOSUrl:
              "https://3d-asset-lookr.s3-ap-southeast-1.amazonaws.com/frameassets/207491/ios/sku_207491.scn",
            frameColorImage:
              "https://ds-static.lenskart.com/product_color_bubble_images/207491_bubble.png",
          },
          {
            id: "206691",
            product_url:
              "https://www.lenskart.com/lenskart-blu-lb-e14058-c14-eyeglasses.html",
            image_urls: [
              "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/peyush-bansal-shark-tank-amethyst-full-rim-hustlr-eyeglasses_g_7913_02_01_2023.jpg",
            ],
            brand_name: "LENSKART HUSTLR",
            model_name: "LB E14058-H",
            prices: [
              {
                name: "Market Price",
                currency_code: "INR",
                price: 2500,
              },
              {
                name: "Lenskart Price",
                currency_code: "INR",
                price: 2500,
              },
            ],
            color: "#7d55c7",
            colorId: 15770,
            arModelAndroidUrl:
              "https://3d-asset-lookr.s3-ap-southeast-1.amazonaws.com/frameassets/206691/android/sku_206691.glb",
            arModelIOSUrl:
              "https://3d-asset-lookr.s3-ap-southeast-1.amazonaws.com/frameassets/206691/ios/sku_206691.scn",
            frameColorImage:
              "https://ds-static.lenskart.com/product_color_bubble_images/206691_bubble.png",
          },
          {
            id: "148704",
            product_url:
              "https://www.lenskart.com/lenskart-blu-shark-tank-lb-e14058-c3-eyeglasses.html",
            image_urls: [
              "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/peyush-bansal-shark-tank-blue-sky-full-rim-hustlr-eyeglasses_g_708823_02_202230_dec22.jpg",
            ],
            brand_name: "LENSKART HUSTLR",
            model_name: "LB E14058-H",
            prices: [
              {
                name: "Market Price",
                currency_code: "INR",
                price: 2500,
              },
              {
                name: "Lenskart Price",
                currency_code: "INR",
                price: 2500,
              },
            ],
            color: "#c3d7ee",
            colorId: 26081,
            arModelAndroidUrl:
              "https://3d-asset-lookr.s3-ap-southeast-1.amazonaws.com/frameassets/148704/android/sku_148704.glb",
            arModelIOSUrl:
              "https://3d-asset-lookr.s3-ap-southeast-1.amazonaws.com/frameassets/148704/ios/sku_148704.scn",
            frameColorImage:
              "https://ds-static.lenskart.com/product_color_bubble_images/148704_bubble.png",
          },
          {
            id: "208966",
            product_url:
              "https://www.lenskart.com/lenskart-blu-lb-e14058-c39-eyeglasses.html",
            image_urls: [
              "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/blue-block-screen-glasses:--grey--full-rim-wayfarer-lenskart-blu-lb-e14058-h-c39_csvfile-1676454791825-g_3913.jpg",
            ],
            brand_name: "Lenskart Blu",
            model_name: "LB E14058-H",
            prices: [
              {
                name: "Market Price",
                currency_code: "INR",
                price: 2500,
              },
              {
                name: "Lenskart Price",
                currency_code: "INR",
                price: 2500,
              },
            ],
            color: "#808080",
            colorId: 11517,
            frameColorImage: "",
          },
          {
            id: "206692",
            product_url:
              "https://www.lenskart.com/lenskart-blu-lb-e14058-c16-eyeglasses.html",
            image_urls: [
              "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/peyush-bansal-shark-tank-monza-red-full-rim-hustlr-eyeglasses_g_7905_02_01_2023.jpg",
            ],
            brand_name: "LENSKART HUSTLR",
            model_name: "LB E14058-H",
            prices: [
              {
                name: "Market Price",
                currency_code: "INR",
                price: 2500,
              },
              {
                name: "Lenskart Price",
                currency_code: "INR",
                price: 2500,
              },
            ],
            color: "#9b2743",
            colorId: 26084,
            arModelAndroidUrl:
              "https://3d-asset-lookr.s3-ap-southeast-1.amazonaws.com/frameassets/206692/android/sku_206692.glb",
            arModelIOSUrl:
              "https://3d-asset-lookr.s3-ap-southeast-1.amazonaws.com/frameassets/206692/ios/sku_206692.scn",
            frameColorImage:
              "https://ds-static.lenskart.com/product_color_bubble_images/206692_bubble.png",
          },
          {
            id: "148702",
            product_url:
              "https://www.lenskart.com/lenskart-blu-lb-e14058-c1-eyeglasses.html",
            image_urls: [
              "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/peyush-bansal-shark-tank-dark-night-full-rim-hustlr-eyeglasses_g_714923_02_202230_dec22.jpg",
            ],
            brand_name: "LENSKART HUSTLR",
            model_name: "LB E14058-H",
            prices: [
              {
                name: "Market Price",
                currency_code: "INR",
                price: 2500,
              },
              {
                name: "Lenskart Price",
                currency_code: "INR",
                price: 2500,
              },
            ],
            color: "#000000",
            colorId: 26083,
            arModelAndroidUrl:
              "https://3d-asset-lookr.s3-ap-southeast-1.amazonaws.com/frameassets/148702/android/sku_148702.glb",
            arModelIOSUrl:
              "https://3d-asset-lookr.s3-ap-southeast-1.amazonaws.com/frameassets/148702/ios/sku_148702.scn",
            frameColorImage:
              "https://ds-static.lenskart.com/product_color_bubble_images/148702_bubble.png",
          },
          {
            id: "206974",
            product_url:
              "https://www.lenskart.com/lenskart-blu-lb-e14058-c20-eyeglasses.html",
            image_urls: [
              "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/peyush-bansal-shark-tank-salmon-full-rim-hustlr-eyeglasses_g_7881_02_01_2023.jpg",
            ],
            brand_name: "LENSKART HUSTLR",
            model_name: "LB E14058-H",
            prices: [
              {
                name: "Market Price",
                currency_code: "INR",
                price: 2500,
              },
              {
                name: "Lenskart Price",
                currency_code: "INR",
                price: 2500,
              },
            ],
            color: "#ca9a8e",
            colorId: 26085,
            arModelAndroidUrl:
              "https://3d-asset-lookr.s3-ap-southeast-1.amazonaws.com/frameassets/206974/android/sku_206974.glb",
            arModelIOSUrl:
              "https://3d-asset-lookr.s3-ap-southeast-1.amazonaws.com/frameassets/206974/ios/sku_206974.scn",
            frameColorImage:
              "https://ds-static.lenskart.com/product_color_bubble_images/206974_bubble.png",
          },
          {
            id: "206973",
            product_url:
              "https://www.lenskart.com/lenskart-blu-lb-e14058-c19-eyeglasses.html",
            image_urls: [
              "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/peyush-bansal-shark-tank-midnight-blue-full-rim-hustlr-eyeglasses_g_7889_02_01_2023.jpg",
            ],
            brand_name: "LENSKART HUSTLR",
            model_name: "LB E14058-H",
            prices: [
              {
                name: "Market Price",
                currency_code: "INR",
                price: 2500,
              },
              {
                name: "Lenskart Price",
                currency_code: "INR",
                price: 2500,
              },
            ],
            color: "#012169",
            colorId: 14321,
            arModelAndroidUrl:
              "https://3d-asset-lookr.s3-ap-southeast-1.amazonaws.com/frameassets/206973/android/sku_206973.glb",
            arModelIOSUrl:
              "https://3d-asset-lookr.s3-ap-southeast-1.amazonaws.com/frameassets/206973/ios/sku_206973.scn",
            frameColorImage:
              "https://ds-static.lenskart.com/product_color_bubble_images/206973_bubble.png",
          },
          {
            id: "206972",
            product_url:
              "https://www.lenskart.com/lenskart-blu-lb-e14058-c18-eyeglasses.html",
            image_urls: [
              "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/peyush-bansal-shark-tank-amber-full-rim-hustlr-eyeglasses_g_7897_23_12_202230_dec22.jpg",
            ],
            brand_name: "LENSKART HUSTLR",
            model_name: "LB E14058-H",
            prices: [
              {
                name: "Market Price",
                currency_code: "INR",
                price: 2500,
              },
              {
                name: "Lenskart Price",
                currency_code: "INR",
                price: 2500,
              },
            ],
            color: "#ee7600",
            colorId: 15168,
            arModelAndroidUrl:
              "https://3d-asset-lookr.s3-ap-southeast-1.amazonaws.com/frameassets/206972/android/sku_206972.glb",
            arModelIOSUrl:
              "https://3d-asset-lookr.s3-ap-southeast-1.amazonaws.com/frameassets/206972/ios/sku_206972.scn",
            frameColorImage:
              "https://ds-static.lenskart.com/product_color_bubble_images/206972_bubble.png",
          },
        ],
        totalColorAvailable: 9,
        is_ditto: true,
        sku: "eye:lenskart-blu-lb-e14058-c21-eyeglasses",
        hover_image_url:
          "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/sand-dune-full-rim-hustlr-eyeglasses_csvfile-1672134871707-g_7872_23_12_2022.jpg",
        classification: "non_power_reading",
        specifications: [],
        wishlistCount: 0,
        purchaseCount: 12706,
        avgRating: 4.75,
        totalNoOfRatings: "14",
        hashtagList: [
          {
            name: "Medium",
            id: 11341,
            property: "frame_size_id",
          },
          {
            name: "Hustlr",
            id: 26011,
            property: "frame_shape_id",
          },
          {
            name: "LENSKART HUSTLR",
            id: 26031,
            property: "brandname_id",
          },
          {
            name: "Full Rim",
            id: 11370,
            property: "frametype_id",
          },
        ],
        offerName: "HUSTLR40",
        cmsLinkAndroid: "https://www.lenskart.com/cms-frame-size",
        cmsLinkIos: "https://www.lenskart.com/cms-frame-size-ios",
        arModelAndroidUrl:
          "https://3d-asset-lookr.s3-ap-southeast-1.amazonaws.com/frameassets/207491/android/sku_207491.glb",
        arModelIOSUrl:
          "https://3d-asset-lookr.s3-ap-southeast-1.amazonaws.com/frameassets/207491/ios/sku_207491.scn",
        arModelOriginalUrl:
          "https://3d-asset-lookr.s3-ap-southeast-1.amazonaws.com/frameassets/207491/orignal/sku_207491.glb",
        frameColorImage:
          "https://ds-static.lenskart.com/product_color_bubble_images/207491_bubble.png",
        subCollection: "",
        inclusiveText: "",
        relatedItems: [],
        isCygnusEnabled: true,
        product_name: "Blue Transparent Full Rim Rectangle Eyeglasses",
        category: "all_computer_glasses",
      },
    ],
  };
}
