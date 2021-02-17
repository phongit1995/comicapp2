export type ItemType = {
    name: string,
    icon : HTMLImageElement
} 
export interface dataSchoolProps {
    _id?:string,
    title?:String,
    author?:string,
    link?:string,
    createdAt?:string,
    updatedAt?:string,
}

export interface dataProps {
    dataSchool?: dataSchoolProps[];
    dataBtq?: dataSchoolProps[];
}
