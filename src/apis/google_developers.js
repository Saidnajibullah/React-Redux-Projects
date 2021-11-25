import axios from "axios";

//https://console.developers.google.com

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 10,
        key: 'AIzaSyDf_YmqWJAo1QqYKokuxkbC_eTgNm_84CY'
    }
})