import axios, { AxiosRequestConfig } from 'axios'

export const sendRequest: () => Promise<boolean> = async () => {
  
  const config:AxiosRequestConfig = {
    
  }

  axios.post('',config)
  
  return false
}

export const acceptRequest: () => Promise<boolean> = async () => {
  return false
}

export const declineRequest: () => Promise<boolean> = async () => {
  return false
}