import axios from "axios";

//unsplash account info:
//1) username: najibullah.1985.1363@gmail.com
//2) password: n...+ ! + 3d
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID z2VWFtdxyG_toRMQwgHDtFuMufoEC1iN7WbIoLoRm-8'
    }
})