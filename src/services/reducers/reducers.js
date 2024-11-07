import { Add_to_cart } from "../constant";

const intialstate = {

    cartdata: []

}
export default function cartItmes(state = [], action) {
       console.log('reducer',action)
    switch (action.type) {
        case Add_to_cart:
            return [
                ...state,
                {cartdata: action.data}
    ]
            break;
        default:
            return state;
    }
}