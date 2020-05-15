import axios from 'axios'
import { IResponsSingIn, IAxiosSignIn } from '../../models/types/types'

export const signInReq: (email: string, password: string) => Promise<boolean> = async (email: string, password: string) => {
  const obj = {
    email: email,
    password: password
  }
  try {
    const signInRes: IAxiosSignIn  = await axios.post('http://localhost:8080/signIn', obj)

    const signIn:IResponsSingIn = signInRes.data

    localStorage.setItem('token',signInRes.headers.authorization)

    localStorage.setItem('name', signIn.user)

    return signIn.authState
  } catch (e) {
    return false;
  }
}