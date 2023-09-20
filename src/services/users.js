import axios from 'axios'
const baseUrl = 'https://nodejs-mongodb-ywal.onrender.com/api/users'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const create = async newObject => {
  const response = await axios.post(baseUrl, newObject)
  return response.data
}

const methods = { getAll, create }
export default methods