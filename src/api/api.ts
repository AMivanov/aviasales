import axios from 'axios';

import {
    fetchIdError,
    fetchIdStart,
    fetchIdSuccess,
    fetchTicketsError,
    fetchTicketsStart,
    fetchTicketsSuccess,
} from '../redux/actions/localActions';

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

export function fetchTickets(searchId: string | number) {
    return async (dispatch: any) => {
        dispatch(fetchTicketsStart())
        try {
            const response = await axios.get(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)
            const tickets = [...response.data.tickets]
            if (response.status === 200) {
                dispatch(fetchTicketsSuccess(tickets))
                if (tickets.length === 0) {
                    fetchTickets(searchId)
                } else {
                    dispatch(fetchTicketsSuccess(tickets))
                }
            }
        } catch (e: any) {
            if (e.response.status === 400 || e.response.status === 500) {
                fetchTickets(searchId)
            }
            dispatch(fetchTicketsError())
        }
    }
}