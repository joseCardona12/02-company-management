import { ICompany } from "../dto/company/companyResponse";

export default function getIdByName(items: ICompany[], name:string | undefined): string | undefined {
    console.log("values", items, "name---", name)
    const itemFound = items.find((item: ICompany) => item.name === name);
    console.log("item found", itemFound);
    return itemFound?.id;
}