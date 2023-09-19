import axios from 'axios'
const baseUrl = 'https://nodejs-mongodb-ywal.onrender.com/api/login'

const login = async credentials => {
  const response = await axios.post(baseUrl, credentials)
  return response.data
}

const exports = { login }

export default exports