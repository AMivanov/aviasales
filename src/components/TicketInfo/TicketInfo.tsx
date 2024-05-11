import * as Styles from './TicketInfo.styles'

export default function TicketInfo () {
    return (
        <Styles.FlightOptions>
            <Styles.Direction>
                <Styles.FlightText>
                    MOW-HKT
                </Styles.FlightText>
                <Styles.FlightInfo>
                    10:45-08:00
                </Styles.FlightInfo>
            </Styles.Direction>
            <Styles.IntervalFlight>
                <Styles.FlightText>
                    В ПУТИ
                </Styles.FlightText>
                <Styles.FlightInfo>
                    21ч 15м
                </Styles.FlightInfo>
            </Styles.IntervalFlight>
            <Styles.StopsFlight>
                <Styles.FlightText>
                    2 ПЕРЕСАДКИ
                </Styles.FlightText>
                <Styles.FlightInfo>
                    HKG,JNB
                </Styles.FlightInfo>
            </Styles.StopsFlight>
        </Styles.FlightOptions>
    )
}