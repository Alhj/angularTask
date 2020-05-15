import axios, { AxiosRequestConfig } from 'axios'
import { tasks } from '../../models/apiTask/types'

export const getTask: (id: string) => Promise<tasks> = async (id: string) => {
  const conf: AxiosRequestConfig = {
    headers: {
      authorization: localStorage.getItem('token')
    }
  }
  const res = await axios.get(`http://localhost:8080/tasks/${id}`, conf)


  const data = res.data

  return data
}