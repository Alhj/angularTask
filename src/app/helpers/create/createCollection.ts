import { ICreateTasks } from '../../models/apiTask/types'

export const genereateCollection: (name: string) => ICreateTasks = (name: string) => {
  const newTasks: ICreateTasks = {
    projectName: name,
    name: localStorage.getItem('name')
  };

  return newTasks;
}