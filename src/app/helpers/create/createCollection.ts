import { v4 } from 'uuid';
import { tasks } from '../../models/apiTask/types'

export const genereateCollection: (name: string) => tasks = (name: string) => {
  const newTasks: tasks = {
    id: v4(),
    name: name,
    taskCollection: []
  };

  return newTasks;
}