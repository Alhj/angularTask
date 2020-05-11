export interface tasks {
  id: string
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