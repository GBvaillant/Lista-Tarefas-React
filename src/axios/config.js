import axios from "axios";

const taskFetch = axios.create({
    baseURL: "http://localhost:5050",

})

export default taskFetch