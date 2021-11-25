import axios from "axios";
import { key } from '../../../google-api-key'
//https://console.developers.google.com

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 10,
        key: key
    }
})