// import { CheckboxValueType } from 'antd/es/checkbox/Group';

import { SET_CHECKED_LIST, SET_SELECTED_OPTION } from '../types/localTypes';

const initialState = {
    checkboxValues: ['Без пересадок', '1 пересадка', '2 пересадки'],
    selectedOption: 'a',
}

export const localReducers = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_CHECKED_LIST:
            return {
                ...state,
                checkboxValues: action.payload,
            };
        case SET_SELECTED_OPTION:
            return {
                ...state,
                selectedOption: action.payload,
            };
        default:
            return state;
    }
}