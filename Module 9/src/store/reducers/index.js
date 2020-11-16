import { combineReducers } from "redux";
import cartCounterRecuder from './cartCounter';
import cartProductsRecuder from './cartProducts';

const rootRecuder = combineReducers({
    count: cartCounterRecuder,
    cart: cartProductsRecuder
});

export default rootRecuder;