import { IVacant } from "../dto/vacant/vacantResponse"

export default function searchElementById(items:IVacant[], id:number): IVacant | undefined{
    const itemsFilter = items.find((item:IVacant) => item.id === id)
    return itemsFilter
}