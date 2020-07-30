import axios from 'axios'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { IRequestCollection, IRequestBody } from '../../models/apiTask/types'
import { IRequest } from '../../models/types/types'


export const sendRequest: (id: string, name: string) => Promise<boolean> = async (id: string, name: string) => {

  const config: AxiosRequestConfig = {
    headers: {
      authorization: localStorage.getItem('token')
    }
  }
  const data: IRequestBody = {
    requestCollectionId: id,
    collectionName: name,
    user: localStorage.getItem('name')
  }
  const res = await axios.post('http://localhost:8080/collection/tasks/request', data, config)

  return res.status === 201
}

export const acceptRequest: (id: string) => Promise<boolean> = async (id: string) => {
  const config: AxiosRequestConfig = {
    headers: {
      authorization: localStorage.getItem('token')
    }
  }
  const url: string = `http://localhost:8080/collection/tasks/request/${id}`


  const res: AxiosResponse = await axios.put(url, '', config)

  return res.status === 203
}

export const declineRequest: (id: string) => Promise<boolean> = async (id: string) => {
  const config: AxiosRequestConfig = {
    headers: {
      authorization: localStorage.getItem('token')
    }
  }
  const url: string = `http://localhost:8080/collection/tasks/request/${id}`

  const res = await axios.delete(url, config)

  return res.status === 204
}

export const getRequestUser: () => Promise<void> = async () => {

}

export const getRequestCollectionUser: () => Promise<IRequestCollection[]> = async () => {
  const config: AxiosRequestConfig = {
    headers: {
      authorization: localStorage.getItem('token')
    }
  }

  const name: string = localStorage.getItem('name')

  const res: IRequest = await axios.get(`http://localhost:8080/request/?name=${name}&isCollection=false`, config)


  return res.data.requestCollection
}

export const getRequestCollection: (id: string) => Promise<IRequestCollection[]> = async (id: string) => {
  const config: AxiosRequestConfig = {
    headers: {
      authorization: localStorage.getItem('token')
    }
  }

  const res: IRequest = await axios.get(`http://localhost:8080/request/?name=${id}&isCollection=true`, config)

  return res.data.requestCollection
}