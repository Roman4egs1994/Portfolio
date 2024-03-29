import axios from "axios";
import {Dispatch} from "redux";

// const instance = axios.create({
//     baseURL: "http://localhost:3010/sendMessage"
// })

export const portfolioApi = {
    sendMessageGmail(data: FormType){
        return axios.post('http://localhost:3009/sendMessage', data)
    }
}


export type FormType = {
    textName: string
    email: string
    textSubject: string
    message: string
}