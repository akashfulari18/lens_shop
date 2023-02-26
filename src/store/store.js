import { legacy_createStore, combineReducers, compose, applyMiddleware } from "redux";
import { reducer as appReducer } from "./App/app.reducer";
import { reducer as authReducer } from "./Auth/auth.reducer";
import thunk from "redux-thunk";
import { reducer as productReducer } from "./Product/product.reducer";

const root_reducer = combineReducers({
	app: appReducer,
	auth: authReducer,
	product: productReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(root_reducer, composeEnhancers(applyMiddleware(thunk)));

store.subscribe(() => {
	let isAuth = store.getState().auth.isAuth;
	localStorage.setItem("isAuth", JSON.stringify(isAuth));
});
