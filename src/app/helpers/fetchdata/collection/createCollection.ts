import axios, { AxiosRequestConfig } from 'axios'
import { IAxiosRoutes } from '../../../models/types/types'
import { ICreateTasks } from '../../../models/apiTask/types'

export const createCollection: (collection: ICreateTasks) => Promise<boolean> = async (collection: ICreateTasks) => {

  const config: AxiosRequestConfig = {
    headers: {
      authorization: localStorage.getItem('token')
    }
  }
    console.log(collection)
  const res: IAxiosRoutes = await axios.post('http://localhost:8080/collection/', collection, config)

  if (res.data.statusCode === 201) {
    return true
  } else {
    return false;
  }
}