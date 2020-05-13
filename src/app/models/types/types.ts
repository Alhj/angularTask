export interface SignUpForm {
  email: string
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
  authorization:string
  }

export interface IAxios {
  headers: IAxiosHeader
  data:IResponsSingIn
  status:number
  statusText:string
}
