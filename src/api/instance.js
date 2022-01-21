import axios from "axios";

const instance = axios.create({
    baseURL: "https://61e7d603e32cd90017acbde6.mockapi.io/",
});
export default instance;