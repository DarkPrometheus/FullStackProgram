const cartProductsRecuder = (state = [], action) => {

    switch (action.type) {
        case "ADD_PRODUCT":
            var copy = [...state];
            var flag = false;

            for (let index = 0; index < copy.length; index++) {
                let item = copy[index];
                if (action.payload.product.id === item.product.id) {
                    item.quantity += action.payload.quantity;
                    flag = true;
                }
            }

            if (!flag) {
                copy.push(action.payload);
            }
            
            return copy;
        case "REMUVE_PRODUCT":
            return state.filter((pc) => pc.product.id !== action.payload.product.id);
        default:
            return state;
    }
};

export default cartProductsRecuder;