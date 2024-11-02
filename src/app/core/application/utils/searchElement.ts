import { IVacant } from "../dto/vacant/vacantResponse";

export default function searchElemenFilterVacant(items:IVacant[], search:string): IVacant[] | undefined{
    const itemsFilter = items.filter((item:IVacant) => item.title.toLowerCase().includes(search.toLowerCase()))
    console.log("itemsFilter",itemsFilter)
    return itemsFilter
}