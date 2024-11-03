export interface IVacantRequest{
    page:number,
    size:number
}
export interface IVacantAddRequest{
    title:string,
    description:string,
    status: string,
    companyId: string
}