export const ADD_ITEM = 'ADD_ITEM';
export const CLEAR_LIST = 'CLEAR_LIST';

export const addItem = (item) => ({
    type: ADD_ITEM,
    payload: item
});

export const clearList = () => ({
    type:CLEAR_LIST
});
