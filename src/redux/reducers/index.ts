import { combineReducers } from 'redux';

import { localReducers } from './localReducers';

const rootReducer = combineReducers({
    ticketsFilter: localReducers,
})

export default rootReducer