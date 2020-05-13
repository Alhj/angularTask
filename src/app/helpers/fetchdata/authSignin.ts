import axios from 'axios'
import { IResponsSingIn, IAxios } from '../../models/types/types'

export const singIn: (email: string, password: string) => Promise<boolean> = async (email: string, password: string) => {
  const obj = {
    email: email,
    password: password
  }
  try {
    const signInRes: IAxios  = await axios.post('http://localhost:8080/signIn', obj)

    const signIn:IResponsSingIn = signInRes.data

    console.log(signInRes)

    localStorage.setItem('token',signInRes.headers.authorization)

    return signIn.authState
  } catch (e) {
    return false;
  }
}