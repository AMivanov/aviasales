import { ISegment } from '../../interfaces';

import * as Styles from './TicketInfo.styles'
import { getFlightTime, getFormattedDate, getStopsWord } from './TicketInfo.utils';

export default function TicketInfo (props: ISegment) {
    const { origin, destination, duration, stops, date } = props

    const stopsArr = stops.map((elem) => elem)
    const stopsWord = getStopsWord(stopsArr)
    const { startTime, endTime } = getFormattedDate(date)
    const { hours, minutes } = getFlightTime(duration)

    return (
        <Styles.FlightOptions>
            <Styles.Direction>
                <Styles.FlightText>
                    {origin} - {destination}
                </Styles.FlightText>
                <Styles.FlightInfo>
                    {startTime} - {endTime}
                </Styles.FlightInfo>
            </Styles.Direction>
            <Styles.IntervalFlight>
                <Styles.FlightText>
                    В ПУТИ
                </Styles.FlightText>
                <Styles.FlightInfo>
                    {hours}ч {minutes}м
                </Styles.FlightInfo>
            </Styles.IntervalFlight>
            <Styles.StopsFlight>
                <Styles.FlightText>
                    {stopsArr.length} {stopsWord}
                </Styles.FlightText>
                <Styles.FlightInfo>
                    {stops.join(', ')}
                </Styles.FlightInfo>
            </Styles.StopsFlight>
        </Styles.FlightOptions>
    )
}