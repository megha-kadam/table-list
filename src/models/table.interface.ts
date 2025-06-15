export interface Istudent {
    name : string,
    age : number
}

export interface Iproduct {
   id : number,
   name : string
}

export interface Iuser{
    id : number,
    username : string
}

export interface Itask{
    task : string,
    completed : boolean
}

export interface Ibook {
    title : string,
    author : string
}

export interface Ipost {
    id : number,
    title : string
}

export interface Iemployee{
    name : string,
    dept : string
}

export interface Iorder {
    orderId : number,
    item :string
}

export interface Iflight{
    flightNo : string,
    destination : string
}

export interface Iexpense{
    category : string,
    amount : number
}

export interface Iproduct1 {
    id : number,
    name : string,
    category : string,
    price : number
}

export interface Iemployee1 {
    id : number,
    name : string,
    department : string,
    experience : number
}

export interface Istudents1{
    id : number
    name : string,
    subjects : Array<string>,
    grades : Array<number>
}

export interface Iteam {
    teamId : number,
    project : string,
    members : Array<string>
}

export interface Icategory {
    id : number,
    name : string,
    subcategories : Array<string>
}

export interface Ibook1 {
    id : number,
    title : string,
    author : string,
    genre : string
}

export interface Imovies{
    id : number,
    title : string,
    rating : number,
    duration : number
}

export interface IworkoutPlan{
    id : number,
    day : string,
    activities : Array<string>
}

export interface Ievent {
    id : number,
    event : string,
    attendees : Array<string>
}

export interface Iorder1{
    orderId : number,
    products : Array<product>
}

export interface product {
    name : string
    qty : number
}

export interface Iclient{
    id : number,
    name : string,
    phone : string,
    company : string
}

export interface Isupplier {
    id : number,
    name : string,
    location : string,
    rating : number
}

export interface Irestaurant {
    id : number,
    name : string,
    menus : Array<string>
}

export interface Idepartment{
    id : number,
    department : string,
    manager : string,
    employees : Array<string>
}

export interface Itransaction{
    id : number,
    amount :number,
    date : string,
    status : string
}

export interface Icourse{
    id : number,
    title : string,
    instructor : string,
    hours : number
}

export interface Ipet {
    id : number,
    name : string,
    species : string,
    age :number
}

export interface Iflght{
    id : number,
    from : string, 
    to : string,
    duration : string
}