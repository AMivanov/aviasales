export interface ISegment {
    origin: string;
    destination: string;
    date: string;
    stops: string[];
    duration: number;
}

export interface ITicket {
    carrier: string;
    price: number;
    segments: [
        ISegment, ISegment
    ]
}
