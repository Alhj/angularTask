import axios, { AxiosRequestConfig } from 'axios'
import { IResponsSingIn, IAxiosSignIn } from '../../models/types/types'
import { IValidUserRes } from '../../models/types/types'

export const signInReq: (email: string, password: string) => Promise<boolean> = async (email: string, password: string) => {
  const obj = {
    email: email,
    password: password
  }
  try {
    const signInRes = await axios.post('http://localhost:8080/signIn', obj)

    const signIn: IResponsSingIn = signInRes.data

    console.log(signInRes.headers)

    if (signIn.authState) {

      localStorage.setItem('token', signInRes.headers.authorization)

      localStorage.setItem('name', signIn.user)

    }

    return signIn.authState
  } catch (e) {
    return false;
  }
}

export const validateName: () => Promise<boolean> = async () => {
  const config: AxiosRequestConfig = {
    headers: {
      authorization: localStorage.getItem('token')
    },
  }

  const res:IValidUserRes = await axios.get(`http://localhost:8080/validation/${localStorage.getItem('name')}`, config)
  
  if (res.data.validUser) {
    return true
  } else {
    return false
  }
}