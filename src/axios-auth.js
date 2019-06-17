import axios from 'axios'

const instance =axios.create({
    baseURL: 'https://digicense-api.herokuapp.com'
})

export default instance