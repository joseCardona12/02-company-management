export interface ICompanyResponse {
    totalPages:       number;
    totalElements:    number;
    pageable:         Pageable;
    numberOfElements: number;
    first:            boolean;
    last:             boolean;
    size:             number;
    content:          ICompany[];
    number:           number;
    sort:             Sort[];
    empty:            boolean;
}

export interface ICompany {
    id:       string;
    name:     string;
    location: string;
    contact:  string;
    vacants:  Vacant[];
}

export interface Vacant {
    id:          number;
    title:       string;
    description: string;
    status:      string;
}

export interface Pageable {
    pageNumber: number;
    pageSize:   number;
    paged:      boolean;
    unpaged:    boolean;
    offset:     number;
    sort:       Sort[];
}

export interface Sort {
    direction:    string;
    nullHandling: string;
    ascending:    boolean;
    property:     string;
    ignoreCase:   boolean;
}

export interface ICompanyErrorResponse{
    status:string,
    code:number,
    errors: string[]
}