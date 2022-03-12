import { Params } from "react-router-dom";
import api from "./BaseApi";

export const getTableData = async (name:string): Promise<any> => {
    return (await api.get(`/table/${name}`)).data;
}

export const getFieldData =async (name:string): Promise<any> => {
    return (await api.get(`/fields/${name}`)).data;
}