import { useSelector } from 'react-redux';
import { Spin } from 'antd';

import Ticket from '../Ticket';
import { ITicket } from '../../interfaces';
import { RootState } from '../../redux/store/store';

import * as Styles from './TicketsList.styles'

export default function TicketsList () {
    const state = useSelector((state: RootState) => ({
        tickets: state.localReducer.tickets.slice(),
        checkboxValues: state.localReducer.checkboxValues,
        selectedOption: state.localReducer.selectedOption,
        loadingTickets: state.localReducer.loadingTickets,
        showLen: state.localReducer.showLen,
    }))
    console.log(state.selectedOption)
   let sortedTickets = [...state.tickets]
    if (state.selectedOption === 'cheap') {
        sortedTickets = state.tickets.sort((a, b) => a.price - b.price)
    } else if (state.selectedOption === 'fast') {
        sortedTickets = state.tickets.sort((a, b) => {
            const durationA = Math.min(a.segments[0].duration, a.segments[1].duration)
            const durationB = Math.min(b.segments[0].duration, b.segments[1].duration)
            return durationA - durationB
        })
    } else if (state.selectedOption === 'optimal') {
        sortedTickets = state.tickets.sort((a, b) => {
            const optimalA = a.price + Math.min(a.segments[0].duration, a.segments[1].duration)
            const optimalB = b.price + Math.min(b.segments[0].duration, b.segments[1].duration)
            return optimalA - optimalB
        })
    }
    console.log(sortedTickets)
    const filterTicketsStops = (ticket: ITicket) => {
        const stopsCount = ticket.segments.map((elem) => elem.stops.length)
        if (state.checkboxValues.includes('Без пересадок')) {
            return stopsCount.some((count) => count === 0);
        }
        return state.checkboxValues.some((value: string) => {
            const valueNumber = parseInt(value, 10);
            return stopsCount.includes(valueNumber);
        });
    }
    const filteredTickets = sortedTickets.filter(filterTicketsStops)
    const displayedTickets = filteredTickets.slice(0, state.showLen)
    const ticketsArr = displayedTickets.map((ticketElem: ITicket, index: number) => {
        return (
                <li key={index}>
                    <Ticket ticketElem={ticketElem} />
                </li>
            )
    })
    return (
            state.loadingTickets ? (<Spin size="large" style={{ margin: '100px 100px 100px 230px' }} />) : (
                <Styles.List>
                    {ticketsArr}
                </Styles.List>
            )
    )
}