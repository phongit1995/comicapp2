import {AxiosResponse}from 'axios';
export interface ResponseApi<T=any>{
    status:string,
    data:T,
    message?:string,
    code:number,
    numberResult:number
}
export interface ResponseApiFull<T=any> extends AxiosResponse {
    data:ResponseApi<T> ;
}