import api from "./BaseApi";

const getProjects = async function ():  Promise<any>{
    return (await api.get('/projects')).data;
}

export default getProjects;