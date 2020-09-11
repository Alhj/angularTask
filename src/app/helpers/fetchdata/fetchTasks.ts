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

  return res.data.taskCollection
}


export const dealteTasks: (id: String) => Promise<boolean> = async (id: string) => {

  const config: AxiosRequestConfig = {
    headers: {
      authorization: localStorage.getItem('token')
    }
  }

  const res = await axios.delete(`http://localhost:8080/collection/${id}`, config)

  if (res) {
    return true
  } else {
    return false
  }
}