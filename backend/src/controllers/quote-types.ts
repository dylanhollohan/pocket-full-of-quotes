// TODO:  figure out payloads, returns for controller functions
export type AddQuoteRequestPayload = { 
    author?: string,
    body: string,
    source?: string
};

export type GetQuotePayload = { 
    author: string,
    body: string,
    source?: string
};