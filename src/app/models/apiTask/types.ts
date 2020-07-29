export interface tasks {
  _id: string
  project: string
  taskCollection: taskCollection[]
}

export interface taskCollection {
  name: string
  task: task[]
}

export interface task {
  id: string
  name: string
  description: string
}

export interface ICreateTasks {
  projectName: string
  name: string
}

export interface IUpdateTask {
  _id: string
  tasks: tasks
}

export interface IRequestCollection {
  _id: string
  requestCollectionId: string
  user: string
}

export interface IRequestBody {
  requestCollectionId: string
  user: string
}

export interface IRequestColl {
  requestCollection: IRequestCollection[]
}