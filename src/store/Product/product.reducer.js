import * as types from "./product.actionTypes"

const init = {
  isLoading: false,
  isError: false,
  compGlassData: [],
  kids: [],
  totalCG: 0,
  totalKids: 0
};

export const reducer = (state = init, { type, payload }) => {
  switch (type) {

    case types.GET_PRODUCT_LOADING:
      return {
        ...state,
        isLoading: true,
        isError: false
      }

    case types.GET_COMPUTER_GLASS_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        compGlassData: payload
      }
    case types.GET_KIDS_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        kids: payload
      }

    case types.REMOVE_ITEM_KIDS:
      let resArr = kids.filter((el, i) => (
        el.id != payload
      ))
      return {
        ...state,
        isLoading: false,
        isError: false,
        kids: resArr
      }

    case types.REMOVE_ITEM_COMP:
      let resCompArr = compGlassData.filter((el, i) => (
        el.id != payload
      ))
      // console.log("resCompArr",resCompArr)
      return {
        ...state,
        isLoading: false,
        isError: false,
        compGlassData: resCompArr
      }

    case types.GET_PRODUCT_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true
      }


    case types.UPDATE_ITEM_COMP:
      return {
        ...state,
        isLoading: false,
        isError: false,
        compGlassData: state.compGlassData.map((el) => (
          el.id === payload.id ? el = payload : el
        ))
      }
    case types.UPDATE_ITEM_KIDS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        kids: state.kids.map((el) => (
          el.id === payload.id ? el = payload : el
        ))
      }
    default:
      return state;
  }
};
