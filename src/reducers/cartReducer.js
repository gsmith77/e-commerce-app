const initialState = {items: []};

export default function cartReducer(state=initialState, action){
    switch(action.type){
        case 'ADD_TO_CART':
            return {...state, items: action.payload.cartItems}
        case 'REMOVE_FROM_CART':
            return {...state, items: action.payload.cartItems}
        default:
            return state;
    }
}