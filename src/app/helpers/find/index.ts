import { tasks, taskCollection } from '../../models/apiTask/types'

export const findTaskIndex: (tasks: taskCollection, id: string) => number = (tasks: taskCollection, id: string) => {

  let index: number

  let spot: number = 0

  tasks.task.forEach(task => {

    if (task.id === id) {
      index = spot
    }
    spot++
  })


  return index
}

export const findCollectionIndex: (collection: tasks, name: string) => number = (collection: tasks, name: string) => {
  let index: number = 0
  let spot: number = 0

  collection.taskCollection.forEach(collection => {

    if(collection.name === name) {
      index = spot
    }
    spot++
  })

  return index
}