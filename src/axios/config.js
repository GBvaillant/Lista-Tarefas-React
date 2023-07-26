import axios from "axios";

const taskFetch = axios.create({
    baseURL: "http://localhost:3000",

})

export default taskFetch