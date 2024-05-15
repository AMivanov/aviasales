import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import TicketsFilter from '../TicketsFilter';
import TransfersFilter from '../TransfersFilter';
import { fetchTickets } from '../../redux/actions/localActions';

import * as Styles from './MainContainer.styles';

// import * as ticketsActions from '../../redux/actions/localActions'

export default function MainContainer () {
    const state = useSelector((state: any) => ({
        tickets: state.localReducer.tickets,
        searchId: state.localReducer.searchId,
    }))
    const dispatch: any = useDispatch()
    useEffect(() => {
        dispatch(fetchTickets(state.searchId))
    }, [state.searchId])
    return (
        <Styles.Main>
            <TransfersFilter />
            <TicketsFilter />
        </Styles.Main>
    )
}