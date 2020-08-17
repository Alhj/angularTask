import axios, { AxiosRequestConfig } from 'axios'

import { IReqeustCollectionName } from '../../../models/types/types'

export const getCollectionName: (id: string) => Promise<string> = async (id: string) => {
  const url: string = `http://localhost:8080/info/collection/${id}`

  const conf: AxiosRequestConfig = {
    headers: {
      authorization: localStorage.getItem('token')
    },
  }

  const res: IReqeustCollectionName = await axios.get(url, conf)

  if (res.status === 200) {
    return res.data.collectionName
  } else {
    return ''
  }

}