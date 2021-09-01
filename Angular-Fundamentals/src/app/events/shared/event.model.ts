export interface IEvent{
id: number,
name: string,
time:string,
date:Date,
price:number,
imageUrl: string,
location?: {
    address: string,
    city: string,
    country: string
}
onlineUrl?: string,
sessions: Isession[]

}

export interface Isession{

    id: number,
    name: string,
    presenter: string,
    duration: number,
    level: string,
    abstract: string,
    voters:string[]
}

