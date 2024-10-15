export const ADD = (item) => {
    return {
        type: "ADD_CART",
        payload:item
    }
}

export const DLT = (id) => {
    return {
        type: "REMOVE_CART",
        payload:id
    }
}

export const REDUCE = (item) => {
    return {
        type: "REDUCE",
        payload:item
    }
}