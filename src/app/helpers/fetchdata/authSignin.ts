import axios from 'axios'
import { promise } from 'protractor';
import { IResponsSingIn } from '../../models/types/types'
export const singIn:(email:string, password: string) => Promise<boolean> = async (email:string, password: string) => {
  const signIn = axios.post('')
  
  return false;
}