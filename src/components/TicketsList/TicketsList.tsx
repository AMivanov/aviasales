import { useSelector } from 'react-redux';
import { Spin } from 'antd';

import Ticket from '../Ticket';
import { RootState } from '../../redux/store/store';
import { ITicket } from '../../interfaces';

import * as Styles from './TicketsList.styles'
import { getDisplayedTickets, filterTicketsPrice } from './TicketList.utils';

export default function TicketsList () {
    const tickets = useSelector((state: RootState) => state.localReducer.tickets.slice())
    const checkboxValues = useSelector((state: RootState) => state.localReducer.checkboxValues)
    const selectedOption = useSelector((state: RootState) => state.localReducer.selectedOption)
    const loadingTickets = useSelector((state: RootState) => state.localReducer.loadingTickets)
    const showLen = useSelector((state: RootState) => state.localReducer.showLen)

    const sortedTicketsPrice = filterTicketsPrice(tickets, selectedOption)
    const displayedTickets = getDisplayedTickets(sortedTicketsPrice, checkboxValues, showLen)

    const ticketsArr = displayedTickets.map((ticketElem: ITicket, index: number) => {
        return (
            <Ticket
              key={index}
              ticketElem={ticketElem}
            />
        )
    })
    return (
        loadingTickets ? (<Spin size="large" style={{ margin: '100px 100px 100px 230px' }} />) : (
            <Styles.List>
                {ticketsArr}
            </Styles.List>
        )
    )
}