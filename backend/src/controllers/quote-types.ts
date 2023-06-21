// TODO:  figure out payloads, returns for controller functions
export type AddQuoteRequestPayload = { 
    userId: string,
    author?: string,
    content: string,
    source?: string
};

export type GetQuotePayload = { 
    author: string,
    content: string,
    source?: string
};

export type GetQuoteRequestPayload = {
    userId: string;
}