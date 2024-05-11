import { CheckboxValueType } from 'antd/es/checkbox/Group';

import { SET_CHECKED_LIST, SET_SELECTED_OPTION } from '../types/localTypes';

export const setCheckedList = (list: CheckboxValueType[]) => ({
    type: SET_CHECKED_LIST,
    payload: list,
});

export const setSelectedOption = (option: string) => ({
    type: SET_SELECTED_OPTION,
    payload: option,
});