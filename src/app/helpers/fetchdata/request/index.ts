import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

import { IReqeustReqKey } from '../../../models/types/types'

export const getRequestLink: (id: string) => Promise<string> = async (id: string) => {
  const url: string = `http://localhost:8080/request/requestLink?name=${localStorage.getItem('name')}&collectionId=${id}`

  const config: AxiosRequestConfig = {
    headers: {
      authorization: localStorage.getItem('token')
    }
  }

  const res: IReqeustReqKey = await axios.get(url, config)

  if (res.status === 403) {
    return ''
  }

  return res.data.key
}


export const acceptLink: (key: string, collectionId: string) => Promise<boolean> = async (key: string, CollectionId: string) => {
  const url: string =`http://localhost:8080/request/requestLink?name=${localStorage.getItem('name')}&key=${key}&collectionId=${CollectionId}`
  
  const config: AxiosRequestConfig = {
    headers: {
      authorization: localStorage.getItem('token')
    }
  }

  const res: AxiosResponse = await axios.post(url, {}, config)

  return res.status === 202
}