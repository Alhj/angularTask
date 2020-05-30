import { ICreateTasks, task } from '../../models/apiTask/types'
import { v4 } from 'uuid'

export const genereateCollection: (name: string) => ICreateTasks = (name: string) => {
  const newTasks: ICreateTasks = {
    projectName: name,
    name: localStorage.getItem('name')
  };

  return newTasks;
}


export const genereateTasks: (name: string) => task = (name:string) => {

  const newTask: task = {
    id: v4(),
    name: name,
    description: ''
  }

  return newTask
}