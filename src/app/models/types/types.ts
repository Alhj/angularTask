import { tasks, task } from '../apiTask/types'

export interface SignUpForm {
  email: string
  name: string
  password: string
  comparePassword: string
}

export interface IRespons {
  statusCode: number
  message: string
}

export interface IResponsSingIn extends IRespons {
  user: string
  authState: boolean
}

interface IAxiosHeader {
  authorization: string
}
interface IAxios {
  headers: IAxiosHeader
  status: number
  statusText: string
}

export interface IAxiosRoutes extends IAxios {
  data: IRespons
}

export interface IAxiosSignIn extends IAxios {
  data: IResponsSingIn
}


export interface IAxiosSignUp {
  data: IRespons
  status: number
  statusText: string
}

interface responsCollection extends IRespons {
  taskCollection: tasks[]
}

export interface IAxiosgetCollections extends IAxios {
  data: responsCollection
}

interface responsTasks extends IRespons {
  project: string
  taskCollection: tasks
}

export interface IAxiosGetTasks extends IAxios {
  data: responsTasks
}

interface responsUpdate extends IRespons {
  updated: boolean
}

export interface IAxiosUppdate extends IAxios {
  data: responsUpdate
}

export interface ICollectionInfo {
  _id:string
  project:string
}


export interface IFindIndex {
  taskCollectionName: string
  taskIndex: number
}