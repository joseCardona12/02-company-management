export interface IVacantResponse{
    content: IVacant[]
    pageable: IPageable
    totalPages: number
    totalElements: number
    last: boolean
    numberOfElements: number
    size: number
    number: number
    sort: ISort2
    first: boolean
    empty: boolean
  }
  
  export interface IVacant {
    id: number
    title: string
    description: string
    status: string
    company?: ICompany
  }

  interface ICompany {
    id:string,
    name:string,
    location:string,
    contact:string
  }
  
  export interface IVacantCreate{
    title: string
    description: string
    status: string,
    companyId:string
  }

  export interface IPageable {
    pageNumber: number
    pageSize: number
    sort: ISort
    offset: number
    paged: boolean
    unpaged: boolean
  }
  
  export interface ISort {
    sorted: boolean
    unsorted: boolean
    empty: boolean
  }
  
  export interface ISort2 {
    sorted: boolean
    unsorted: boolean
    empty: boolean
  }