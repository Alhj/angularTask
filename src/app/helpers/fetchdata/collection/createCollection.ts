import axios, { AxiosRequestConfig } from 'axios'
import { IAxiosRoutes } from '../../../models/types/types'
import { ICreateTasks } from '../../../models/apiTask/types'

export const createCollection: (collection: ICreateTasks) => Promise<boolean> = async (collection: ICreateTasks) => {

  const config: AxiosRequestConfig = {
    headers: {
      authorization: localStorage.getItem('token')
    }
  }
  
  const res: IAxiosRoutes = await axios.post('http://localhost:8080/collection/', collection, config)

  if (res.data.statusCode === 201) {
    return true
  } else {
    return false;
  }
}


export const dealteCollection: (id: string, collectionId: string) => Promise<boolean> = async (id, collectionId) => {
  
  const config: AxiosRequestConfig = {
    headers: {
      authorization: localStorage.getItem('token')
    }
  }

  const res = await axios.delete('', config)
  
  return false
}