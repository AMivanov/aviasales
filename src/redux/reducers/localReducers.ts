import { SET_CHECKED_LIST,
    SET_SELECTED_OPTION,
    FETCH_ID_START,
    FETCH_ID_SUCCESS,
    FETCH_ID_ERROR,
    FETCH_TICKETS_START,
    FETCH_TICKETS_SUCCESS,
    FETCH_TICKETS_ERROR,
    SHOW_MORE_TICKETS } from '../types/localTypes';

const initialState = {
    tickets: [],
    checkboxValues: ['Без пересадок', '1 пересадка', '2 пересадки'],
    selectedOption: 'cheap',
    searchId: '',
    loadingId: false,
    loadingTickets: false,
    error: false,
    showLen: 5,
}

export const localReducers = (state = initialState, action: any) => {
    switch (action.type) {
        case FETCH_TICKETS_START:
            return {
                ...state,
                loadingTickets: true,
            }
        case FETCH_TICKETS_SUCCESS:
            return {
                ...state,
                loadingTickets: false,
                tickets: [...state.tickets, ...action.tickets],
                error: false,
            }
        case FETCH_TICKETS_ERROR:
            return {
                ...state,
                loadingTickets: false,
                error: true,
            }
        case FETCH_ID_START:
            return {
                ...state,
                loadingId: true,
            }
        case FETCH_ID_SUCCESS:
            return {
                ...state,
                loadingId: false,
                searchId: action.searchId,
                error: false,
            }
        case FETCH_ID_ERROR:
            return {
                ...state,
                loadingId: false,
                error: true,
            }
        case SET_CHECKED_LIST:
            return {
                ...state,
                checkboxValues: action.payload,
            };
        case SHOW_MORE_TICKETS:
            return {
                ...state,
                showLen: state.showLen + 5,
            }
        case SET_SELECTED_OPTION:
            return {
                ...state,
                selectedOption: action.payload,
            };
        default:
            return state;
    }
}