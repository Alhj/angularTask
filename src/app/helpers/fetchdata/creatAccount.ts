import axios from 'axios'
import { SignUpForm } from '../../models/types/types'
import { IAxiosSignUp } from '../../models/types/types'

export const signUp: (singUpInfo: SignUpForm) => Promise<boolean> = async (singUpInfo: SignUpForm) => {
  try {
    const signUpPost: IAxiosSignUp = await axios.post('http://localhost:8080/user/', singUpInfo)
    if (signUpPost.status === 201) {
      return true
    } else {
      return false
    }
  } catch (e) {
    return false
  }
}