import {ADD_ITEM, CLEAR_LIST} from "./Actions";


export const initialState = {
    listItems : []
}
export const reducer = (state=initialState,action)=>{
    switch (action.type) {
        case ADD_ITEM:
            const new_list = [...state.listItems,action.payload];
            return {...state,listItems:new_list};
        case CLEAR_LIST:
            return {...state,listItems: []}
        default:
            return state;
    }
}
