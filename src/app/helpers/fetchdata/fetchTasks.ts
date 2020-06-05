import axios, { AxiosRequestConfig } from 'axios'

import { tasks } from '../../models/apiTask/types'
import { IAxiosgetCollections } from '../../models/types/types'

export const getUserTasks: () => Promise<tasks[]> = async () => {

  const name: string = localStorage.getItem('name')
  const config: AxiosRequestConfig = {
    headers: {
      authorization: localStorage.getItem('token')
    }
  }
  
  const res: IAxiosgetCollections = await axios.get(`http://localhost:8080/collection/?name=${name}`, config);

  console.log(res.data.taskCollection)

  return res.data.taskCollection
} 
