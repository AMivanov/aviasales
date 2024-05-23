export interface ISegmentProps {
    origin: string;
    destination: string;
    date: string;
    stops: string[];
    duration: number;
}

export interface ITicketProps {
    carrier: string;
    price: number;
    segments: [
        ISegmentProps, ISegmentProps
    ]
}

export interface ITicketElemProps {
    ticketElem: ITicketProps
}
