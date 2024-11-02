export default class HttpClientUtil{
    private baseUrl:string = "http://vacantsbackendgates-production.up.railway.app/api/v1/";

    constructor(urlClient?:string){
        this.baseUrl = urlClient || this.baseUrl;
    }

    async get<T>(url:string):Promise<T>{
        const headers = this.getHeaders();
        const response = await fetch(`${this.baseUrl}${url}`,{
            headers,
            method:"GET",
            cache:"no-store"
        });
        return this.managementError(response);
    }

    private getHeaders(): {[key:string]:string}{
        return {
            'Content-Type': 'application/json',
        }
    }

    private async managementError(response:Response){
        if(!response.ok){
            const errorData = await response.json();
            throw (errorData);
        }
        return await response.json();
    }
}