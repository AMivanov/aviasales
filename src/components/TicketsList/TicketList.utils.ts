import { ITicket } from '../../interfaces';

export const filterTicketsPrice = (tickets: any[], selectedOption: string) => {
    let sortedTicketsPrice = [...tickets]
    if (selectedOption === 'cheap') {
        sortedTicketsPrice = tickets.sort((a, b) => a.price - b.price)
    } else if (selectedOption === 'fast') {
        sortedTicketsPrice = tickets.sort((a, b) => {
            const durationA = Math.min(a.segments[0].duration, a.segments[1].duration)
            const durationB = Math.min(b.segments[0].duration, b.segments[1].duration)
            return durationA - durationB
        })
    } else if (selectedOption === 'optimal') {
        sortedTicketsPrice = tickets.sort((a, b) => {
            const optimalA = a.price + Math.min(a.segments[0].duration, a.segments[1].duration)
            const optimalB = b.price + Math.min(b.segments[0].duration, b.segments[1].duration)
            return optimalA - optimalB
        })
    }
    return sortedTicketsPrice
}

export const filterTicketsStops = (ticket: ITicket, checkboxValues: string[]) => {
    const stopsCount = ticket.segments.map((elem) => elem.stops.length)
    if (checkboxValues.includes('Без пересадок')) {
        return stopsCount.some((count) => count === 0);
    }
    return checkboxValues.some((value: string) => {
        const valueNumber = parseInt(value, 10);
        return stopsCount.includes(valueNumber);
    });
}

export const getDisplayedTickets = (sortedTicketsPrice: any[], checkboxValues: string[], showLen: number) => {
    const displayedTickets = sortedTicketsPrice.filter((elem) => filterTicketsStops(elem, checkboxValues))
    return displayedTickets.slice(0, showLen);
}