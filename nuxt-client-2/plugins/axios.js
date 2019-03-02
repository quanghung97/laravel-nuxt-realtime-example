import axios from 'axios'
import https from 'https'

let instance = axios.create({
    baseURL: 'https://laravel1.test',
    //Authorize https dont have CA so disable each axios request
    httpsAgent: new https.Agent({ rejectUnauthorized: false })
})

export default instance
