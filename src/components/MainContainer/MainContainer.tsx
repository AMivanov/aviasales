import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import TicketsPage from '../TicketsPage';
import TransfersFilter from '../TransfersFilter';
import { fetchId, fetchTickets } from '../../api/api';
import { RootState } from '../../redux/store/store';

import * as Styles from './MainContainer.styles';

export default function MainContainer () {
    const searchId = useSelector((state: RootState) => state.localReducer.searchId)

    const dispatch: any = useDispatch()

    useEffect(() => {
        dispatch(fetchId())
    }, [])

    useEffect(() => {
        dispatch(fetchTickets(searchId))
    }, [searchId])

    return (
        <Styles.Main>
            <TransfersFilter />
            <TicketsPage />
        </Styles.Main>
    )
}