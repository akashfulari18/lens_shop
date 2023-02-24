import { APP_ERROR, APP_LOADING, GET_COMP_PRODUCTS, GET_KIDS_PRODUCTS } from "./app.actionTypes";

const init = {
  isLoading: false,
  isError: false,
  compGlassesData: [],
  kidsGlassesData: [],
};

export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case APP_LOADING:{
      return {
        ...state,isLoading:true
      }
    }
    case APP_ERROR:{
      return {
        ...state,isLoading:false,isError:true
      }
    }
    case GET_COMP_PRODUCTS:{
      return {
        ...state,compGlassesData:payload,isLoading:false
      }
    }
    case GET_KIDS_PRODUCTS:{
      return {
        ...state,kidsGlassesData:payload,isLoading:false
      }
    }
    default:
      return state;
  }
};
