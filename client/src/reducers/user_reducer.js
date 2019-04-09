import {
  LOGIN_USER,
  REGISTER_USER,
  AUTH_USER,
  LOGOUT_USER,
  ADD_TO_USER_CART,
  GET_CART_ITEMS,
  REMOVE_CART_ITEM
} from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, success: action.payload };
    case REGISTER_USER:
      return { ...state, loginSuccess: action.payload };
    case AUTH_USER:
      return { ...state, userData: action.payload };
    case LOGOUT_USER:
      return { ...state };
    case ADD_TO_USER_CART:
      return {
        ...state,
        userData: {
          ...state.UserData,
          cart: action.payload
        }
      };
    case GET_CART_ITEMS:
      return {
        ...state,
        cartDetail: action.payload
      };
    case REMOVE_CART_ITEM:
      return {
        ...state,
        cartDetail: action.payload.cartDetail,
        userData: {
          ...state.userData,
          cart: action.payload.cart
        }
      };
    default:
      return state;
  }
}
