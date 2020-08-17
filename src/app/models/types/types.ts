import { tasks } from '../apiTask/types'
import { IRequestColl } from '../apiTask/types'

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

export interface IRequest {
  taskCollection: {
    _id: string
    users: string[]
  }
}

export interface IAxiosRequest extends IAxios {
  data: IRequest
}

export interface ICollectionInfo {
  _id: string
  project: string
}

export interface IFindIndex {
  taskCollectionName: string
  taskIndex: number
}

export interface IValidationUser {
  validUser: boolean
}

export interface IValidUserRes extends IAxios {
  data: IValidationUser
}


export interface IRequest extends IAxios {
  data: IRequestColl
}


interface IReqKey {
  status: number
  message: string
  key: string
}

export interface IReqeustReqKey extends IAxios {
  data: IReqKey
}

interface IReqCollectionName {
  status: number
  message: string
  collectionName: string
}

export interface IReqeustCollectionName extends IAxios {
  data: IReqCollectionName
}