import axios from 'axios'

import { getJwtToken } from './auth.utils'
import config from '../config'

const jwtToken = getJwtToken()

// axios instance to be used to make http requests from the client
const axiosInstance = axios.create({
  baseURL: config.serverHost,
  headers: {
    Authorization: jwtToken != null ? `Bearer ${jwtToken}` : null
  }
})

export default axiosInstance
