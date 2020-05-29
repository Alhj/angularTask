import axios, { AxiosRequestConfig } from 'axios'
import { tasks, taskCollection } from '../../models/apiTask/types'
import { IAxiosGetTasks, IAxiosUppdate } from '../../models/types/types'
import { createTask } from '../../models/types/createTypes'

export const getTask: (id: string) => Promise<tasks> = async (id: string) => {
  const conf: AxiosRequestConfig = {
    headers: {
      authorization: localStorage.getItem('token')
    },
  }


  const res: IAxiosGetTasks = await axios.get(`http://localhost:8080/collection/tasks/${id}`, conf)

  const data = res.data

  return data.taskCollection
}

export const updateTask: (collection: createTask) => Promise<boolean> = async (collection: createTask) => {

  let findCollection: boolean = false

  const update: tasks = await getTask(collection.id);

  console.log(collection.name)

  update.taskCollection.forEach(task => {
    if (task.name.toLowerCase() === collection.name.toLowerCase()) {
      task.task.push(collection.task)
      findCollection = true
    }
  })

  if (!findCollection && update.taskCollection.length < 5) {
    const newCol: taskCollection = {
      name: collection.name,
      task: [collection.task]
    }

    update.taskCollection.push(newCol)
  }

  const config: AxiosRequestConfig = {
    headers: {
      authorization: localStorage.getItem('token')
    }
  }

  const res: IAxiosUppdate = await axios.put(`http://localhost:8080/collection/tasks/${collection.id}`, update, config)

  console.log(res)

  return res.data.updated
}