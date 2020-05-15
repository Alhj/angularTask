import { tasks } from '../../models/apiTask/types';
import { one, two, three } from '../../models/mokTasks/tasks'

export const findTasks: (id: string) => tasks = (id: string) => {
  if (one._id === id) {
    return one;
  }
  if (two._id === id) {
    return two;
  }
  if (three._id === id) {
    return three;
  }
}