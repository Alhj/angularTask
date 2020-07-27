import axios, { AxiosRequestConfig } from 'axios'
import { IRequestCollection, IRequestColl } from '../../models/apiTask/types'


export const sendRequest: (id: string) => Promise<boolean> = async (id: string) => {

  const config: AxiosRequestConfig = {
    headers: {
      authorization: localStorage.getItem('token')
    }
  }
  const data: IRequestCollection = {
    requestCollectionId: id,
    user: localStorage.getItem('name')
  }
  const res = await axios.post('http://localhost:8080/collection/tasks/request', data, config)

  return res.status === 201
}

export const acceptRequest: () => Promise<boolean> = async () => {
  return false
}

export const declineRequest: () => Promise<boolean> = async () => {
  return false
}

export const getRequestUser: () => Promise<void> = async () => {
  
}

export const getRequestCollectionUser: () => Promise<void> = async () => {
  const config: AxiosRequestConfig = {
    headers: {
      authorization: localStorage.getItem('token')
    }
  }


  const name: string = localStorage.getItem('name')

  const res: IRequestColl = await axios.get(`http://localhost:8080/request/?name=${name}&isCollection=false`, config)
  
}

export const getRequestCollection: () => Promise<void> = async () => {

}