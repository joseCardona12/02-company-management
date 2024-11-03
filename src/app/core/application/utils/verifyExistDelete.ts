export default function verifyExistDelete(value:string): boolean | string {
    if(value.includes("DELETE+")){
        const name = value.split("+")[1];
        if(name && name.length >= 4){
            return name;
        }
    }
    return false
}