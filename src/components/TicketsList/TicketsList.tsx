import { useSelector } from 'react-redux';

import Ticket from '../Ticket';
import { ITicket } from '../../interfaces';
import { RootState } from '../../redux/store/store';

import * as Styles from './TicketsList.styles'

export default function TicketsList () {
    const state = useSelector((state: RootState) => ({
        tickets: state.localReducer.tickets,
    }))
    const ticketsArr = state.tickets.map((ticketElem: ITicket, index: number) => {
        return (
                <li key={index}>
                    <Ticket ticketElem={ticketElem} />
                </li>
            )
    })
    return (
        <Styles.List>
            {ticketsArr}
        </Styles.List>
    )
}