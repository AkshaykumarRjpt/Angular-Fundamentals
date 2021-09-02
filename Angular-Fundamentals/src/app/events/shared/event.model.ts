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
},
onlineUrl?: string,
sessions: ISession[]

}

export interface ISession{

    id: number,
    name: string,
    presenter: string,
    duration: number,
    level: string,
    abstract: string,
    voters:string[]
}

