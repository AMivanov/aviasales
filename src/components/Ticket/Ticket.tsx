import TicketInfo from '../TicketInfo';
import { ITicket } from '../../interfaces';

import * as Styles from './Ticket.styles'

interface TicketProps {
    ticketElem: ITicket
}

export default function Ticket (props: TicketProps) {
    const { ticketElem } = props
    // console.log(ticketElem)
    return (
        <Styles.TicketCard>
            <Styles.TicketAmount>
                {ticketElem.price} Р
            </Styles.TicketAmount>
            <Styles.TicketLogo>
                <img src={`//pics.avs.io/99/36/${ticketElem.carrier}.png`} alt="logo-company" />
            </Styles.TicketLogo>
            <TicketInfo
              origin={ticketElem.segments[0].origin}
              destination={ticketElem.segments[0].destination}
              date={ticketElem.segments[0].date}
              stops={ticketElem.segments[0].stops}
              duration={ticketElem.segments[0].duration}
            />
            <TicketInfo
              origin={ticketElem.segments[1].origin}
              destination={ticketElem.segments[1].destination}
              date={ticketElem.segments[1].date}
              stops={ticketElem.segments[1].stops}
              duration={ticketElem.segments[1].duration}
            />
        </Styles.TicketCard>
    )
}