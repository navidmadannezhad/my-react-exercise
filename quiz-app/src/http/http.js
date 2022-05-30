import axios from "axios";

const httpClient = url => axios({
    url: url,
    method: "get"
});

export { httpClient };