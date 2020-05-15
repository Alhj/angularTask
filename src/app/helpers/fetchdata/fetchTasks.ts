import axios, { AxiosRequestConfig } from 'axios'

import { tasks } from '../../models/apiTask/types'
import { IAxiosgetCollections } from '../../models/types/types'

export const getUserTasks: () => Promise<tasks> = async () => {

  const config: AxiosRequestConfig = {
    headers: {
      authorization: localStorage.getItem('token')
    },
    data: {
      name: localStorage.getItem('name')
    }
  }

  const res: IAxiosgetCollections = await axios.get('http://localhost:8080/collection', config);

  return res.data.taskCollection
}  