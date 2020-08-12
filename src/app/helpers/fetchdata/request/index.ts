import axios, { AxiosRequestConfig } from 'axios'

import { IReqeustReqKey } from '../../../models/types/types'

export const getRequestLink: (id: string) => Promise<string> = async (id: string) => {
  const url: string = `http://localhost:8080/collection/request/requestLink?name=${localStorage.getItem('name')}&collectionId=${id}`

  const config: AxiosRequestConfig = {
    headers: {
      authorization: localStorage.getItem('token')
    }
  }

  const res: IReqeustReqKey = await axios.get(url, config)

  if(res.status === 403) {
    return ''
  }

  return res.data.key
}