import { CheckboxValueType } from 'antd/es/checkbox/Group';

import { SET_CHECKED_LIST,
    SET_SELECTED_OPTION,
    FETCH_ID_START,
    FETCH_ID_SUCCESS,
    FETCH_ID_ERROR,
    FETCH_TICKETS_START,
    FETCH_TICKETS_SUCCESS,
    FETCH_TICKETS_ERROR,
    SHOW_MORE_TICKETS } from '../types/localTypes';

export function fetchIdStart() {
    return {
        type: FETCH_ID_START,
    }
}

export function fetchIdSuccess(searchId: string | number) {
    return {
        type: FETCH_ID_SUCCESS,
        searchId,
    }
}

export function fetchIdError() {
    return {
        type: FETCH_ID_ERROR,
    }
}

export function fetchTicketsStart() {
    return {
        type: FETCH_TICKETS_START,
    }
}

export function fetchTicketsSuccess(tickets: any[]) {
    return {
        type: FETCH_TICKETS_SUCCESS,
        tickets,
    }
}

export function fetchTicketsError() {
    return {
        type: FETCH_TICKETS_ERROR,
    }
}

export function showMore() {
    return {
        type: SHOW_MORE_TICKETS,
    }
}

export const setCheckedList = (list: CheckboxValueType[]) => ({
    type: SET_CHECKED_LIST,
    payload: list,
});

export const setSelectedOption = (option: string) => ({
    type: SET_SELECTED_OPTION,
    payload: option,
});