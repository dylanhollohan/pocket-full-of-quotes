// TODO:  figure out payloads, returns for controller functions
export type AddQuoteRequestPayload = { 
    author?: string,
    content: string,
    source?: string
};

export type GetQuotePayload = { 
    author: string,
    content: string,
    source?: string
};