import { tasks, taskCollection } from '../../models/apiTask/types'

export const findTaskIndex: (tasks: taskCollection, id: string) => number = (tasks: taskCollection, id: string) => {

  let index: number = 0

  tasks.task.forEach(task => {
    let spot: number = 0

    if (task.id === id) {
      index = spot
    }
  })

  return index
}

export const findCollectionIndex: (collection: tasks, name: string) => number = (collection: tasks, name: string) => {
  let index: number = 0

  collection.taskCollection.forEach(collection => {
    let spot: number = 0

    if(collection.name === name) {
      index = spot
    }
  })

  return index
}