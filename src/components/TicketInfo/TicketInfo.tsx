import { ISegment } from '../../interfaces'

import * as Styles from './TicketInfo.styles'

export default function TicketInfo ({ origin, destination, duration, stops, date }: ISegment) {
    const stopsArr = stops.map((elem) => elem)
    let stopsWord = 'ПЕРЕСАДКА'
    if (stopsArr.length === 0) {
        stopsWord = 'ПЕРЕСАДОК'
    } else if (stopsArr.length === 1) {
        stopsWord = 'ПЕРЕСАДКА'
    } else {
        stopsWord = 'ПЕРЕСАДКИ'
    }
    const destinationDate = new Date(date)
    const startTime = `${String(destinationDate.getHours()).padStart(2, '0')}:${String(destinationDate.getMinutes()).padStart(2, '0')}`
    destinationDate.setHours(destinationDate.getHours() + 1)
    const endTime = `${String(destinationDate.getHours()).padStart(2, '0')}:${String(destinationDate.getMinutes()).padStart(2, '0')}`
    const hours = Math.floor(duration / 60)
    const minutes = duration % 60
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