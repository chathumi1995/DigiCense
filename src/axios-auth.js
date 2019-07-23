import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://digicense-api.herokuapp.com'
})

instance.defaults.headers.common['Accepts'] = 'application/json'
instance.defaults.headers.common['Content-Type'] = 'application/json'
instance.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
//instance.defaults.headers.common['Authorization'] = AURH_TOKEN
export default instance