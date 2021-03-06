import axios, { AxiosRequestConfig } from 'axios'

import { tasks, taskCollection, IUpdateTask } from '../../models/apiTask/types'
import { IAxiosGetTasks, IAxiosUppdate, IAxiosRequest, IRequestCollectionUser } from '../../models/types/types'
import { createTask } from '../../models/types/createTypes'

export const getTask: (id: string) => Promise<tasks> = async (id: string) => {
  const conf: AxiosRequestConfig = {
    headers: {
      authorization: localStorage.getItem('token')
    },
  }

  const res: IAxiosGetTasks = await axios.get(`http://localhost:8080/collection/${id}`, conf)

  const data = res.data

  return data.taskCollection
}

export const getCollectionUsers: (id: string) => Promise<string[]> = async (id: string) => {

  const conf: AxiosRequestConfig = {
    headers: {
      authorization: localStorage.getItem('token')
    },
  }

  const res: IRequestCollectionUser = await axios.get(`http://localhost:8080/info/collectio/users/${id}`, conf)


  return res.data.users
}

export const getUser: (id: string) => Promise<boolean> = async (id: string) => {

  const conf: AxiosRequestConfig = {
    headers: {
      authorization: localStorage.getItem('token')
    },
  }

  const res: IAxiosRequest = await axios.get(`http://localhost:8080/collection/${id}`, conf)

  const data = res.data.taskCollection

  const condition = (userName: string) => userName.toLowerCase() === localStorage.getItem('name').toLowerCase()

  const result: number = data.users.findIndex(condition)

  if (result) {
    return true
  } else {
    return false
  }
}

export const createNewTask: (collection: createTask) => Promise<boolean> = async (collection: createTask) => {

  let findCollection: boolean = false

  const update: tasks = await getTask(collection.id);

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

  const res: IAxiosUppdate = await axios.post(`http://localhost:8080/collection/${collection.id}`, update, config)

  return res.data.updated
}

export const changeCollection: (tasks: tasks, id: string) => Promise<void> = async (tasks: tasks, id: string) => {

  const body: IUpdateTask = {
    _id: id,
    tasks: tasks
  }

  const config: AxiosRequestConfig = {
    headers: {
      authorization: localStorage.getItem('token')
    }
  }

  await axios.put(`http://localhost:8080/collection/tasks/task/${id}`, body, config)

}

export const delateCollection: (id: string, name: string) => Promise<void> = async (id: string, name: string) => {
  const config: AxiosRequestConfig = {
    headers: {
      authorization: localStorage.getItem('token')
    }
  }


  await axios.delete(`http://localhost:8080/collection/tasks/taskCollection/${id}?name=${name}`, config)
}