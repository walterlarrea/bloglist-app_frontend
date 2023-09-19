import axios from 'axios'
const baseUrl = 'https://nodejs-mongodb-ywal.onrender.com/api/comments'

const create = async newObject => {
  const response = await axios.post(baseUrl, newObject)
  return response.data
}

const methods = { create }
export default methods