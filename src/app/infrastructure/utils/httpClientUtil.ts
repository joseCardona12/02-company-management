export default class HttpClientUtil{
    private baseUrl:string = "https://vacantsbackendgates-production.up.railway.app/api/v1/";
    

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
    async post<T, B>(url:string, body:B):Promise<T>{
        const headers = this.getHeaders();
        const response = await fetch(`${this.baseUrl}${url}`,{
            headers,
            method:"POST",
            cache:"no-store",
            body:JSON.stringify(body)
        });
        return this.managementError(response);
    }
    async put<T,B>(url:string, body:B, id:string | number):Promise<T>{
        const headers = this.getHeaders();
        const response = await fetch(`${this.baseUrl}${url}/${id}`,{
            headers,
            method:"PUT",
            cache:"no-store",
            body:JSON.stringify(body)
        });
        return this.managementError(response);
    }
    async delete<T>(url:string, id:string | number):Promise<T>{
        const headers = this.getHeaders();
        const response = await fetch(`${this.baseUrl}${url}/${id}`,{
            headers,
            method:"DELETE",
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