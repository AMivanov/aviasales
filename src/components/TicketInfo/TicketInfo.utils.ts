export const getStopsWord = (stopsArr: string[]) => {
    let stopsWord = 'ПЕРЕСАДКА'
    if (stopsArr.length === 0) {
        stopsWord = 'ПЕРЕСАДОК'
    } else if (stopsArr.length > 1) {
        stopsWord = 'ПЕРЕСАДКИ'
    }
    return stopsWord
}

export const getFormattedDate = (date: string) => {
    const destinationDate = new Date(date)
    const startTime = `${String(destinationDate.getHours()).padStart(2, '0')}:${String(destinationDate.getMinutes()).padStart(2, '0')}`
    destinationDate.setHours(destinationDate.getHours() + 1)
    const endTime = `${String(destinationDate.getHours()).padStart(2, '0')}:${String(destinationDate.getMinutes()).padStart(2, '0')}`
    return { startTime, endTime }
}

export const getFlightTime = (duration: number) => {
    const hours = Math.floor(duration / 60)
    const minutes = duration % 60
    return { hours, minutes }
}
