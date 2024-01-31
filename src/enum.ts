export enum CustomerType {
    REGULAR = "REGULER",
    GOLD = "GOLD",
    PLATINUM = "PLATINUM",
}

export type Customer = {
    id: number,
    name: string,
    type: CustomerType
}