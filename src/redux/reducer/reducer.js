const INIT_STATE = {
    carts: []
};

export const cartreducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "ADD_CART":
            const itemIndex = state.carts.findIndex(item => item.id === action.payload.id);
            if (itemIndex >= 0) {
                return {
                    ...state,
                    carts: state.carts.map((item, index) =>
                        index === itemIndex ? { ...item, qnty: item.qnty + 1 } : item
                    )
                };
            } else {
                const temp = { ...action.payload, qnty: 1 }
                return {
                    ...state,
                    carts: [...state.carts, temp]
                }
            }


        case "REMOVE_CART":

            const data = state.carts.filter((ele) => ele.id !== action.payload);

            return {
                ...state,
                carts: data
            }

        case "REDUCE":

            const itemIndexRed = state.carts.findIndex(item => item.id === action.payload.id);

            if (state.carts[itemIndexRed].qnty >= 1) {
                return {
                    ...state,
                    carts: state.carts.map((item, index) =>
                        index === itemIndexRed ? { ...item, qnty: item.qnty - 1 } : item
                    )
                };
            }
            else if (state.carts[itemIndexRed].qnty === 1) {
                const data = state.carts.filter((el) => el.id !== action.payload);

                return {
                    ...state,
                    carts: data
                }
            }
            else {
                const temp = { ...action.payload, qnty: 1 }
                return {
                    ...state,
                    carts: [...state.carts, temp]
                }
            }

        default:
            return state
    }
}