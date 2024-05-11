import { ReactComponent as S7logo } from '../../public/s7Logo.svg'
import TicketInfo from '../TicketInfo';

import * as Styles from './Ticket.styles'

export default function Ticket () {
    return (
        <Styles.TicketCard>
            <Styles.TicketAmount>
                13400 Р
            </Styles.TicketAmount>
            <Styles.TicketLogo>
                <S7logo />
            </Styles.TicketLogo>
            <TicketInfo />
            <TicketInfo />
        </Styles.TicketCard>
    )
}