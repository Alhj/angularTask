import { tasks } from '../../models/apiTask/types';
import { one, two, three } from '../../models/mokTasks/tasks'

export const findTasks: (id: string) => tasks = (id: string) => {
  if (one.id === id) {
    return one;
  }
  if (two.id === id) {
    return two;
  }
  if (three.id === id) {
    return three;
  }
}