import { CheckboxValueType } from 'antd/es/checkbox/Group';
import axios from 'axios';

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

export function fetchId() {
    return async (dispatch: any) => {
        dispatch(fetchIdStart())
        try {
            const response = await axios.get('https://aviasales-test-api.kata.academy/search')
            if (response.status === 200) {
                dispatch(fetchIdSuccess(response.data.searchId))
            }
        } catch (e) {
            dispatch(fetchIdError())
        }
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

export function fetchTickets(searchId: string | number) {
    return async (dispatch: any) => {
        dispatch(fetchTicketsStart())
        try {
            const response = await axios.get(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)
            const tickets = [...response.data.tickets]
            if (response.status === 200) {
                dispatch(fetchTicketsSuccess(tickets))
            }
        } catch (e: any) {
            if (e.response.status === 400 || e.response.status === 500) {
                fetchTickets(searchId)
            }
            dispatch(fetchTicketsError())
        }
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