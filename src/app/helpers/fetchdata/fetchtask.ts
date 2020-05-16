import axios, { AxiosRequestConfig } from 'axios'
import { tasks } from '../../models/apiTask/types'
import { IAxiosGetTasks } from '../../models/types/types'
import { one } from '../../models/mokTasks/tasks'


export const getTask: (id: string) => Promise<tasks> = async (id: string) => {
  const conf: AxiosRequestConfig = {
    headers: {
      authorization: localStorage.getItem('token')
    },
  }


  const res: IAxiosGetTasks = await axios.get(`http://localhost:8080/collection/tasks/${id}`, conf)

  console.log('hello')

  const data = res.data

  return data.taskCollection
}