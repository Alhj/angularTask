import { createReducer, on } from '@ngrx/store'
import { setMessage, clearMessage } from '../action/message.actions'

export const initialState: string = ''

const _messageReducer = createReducer(initialState,
  on(setMessage, (state, { message }) => state = message),
  on(clearMessage, state => state = '')
)


export function messageReducer(state, action) {
  return _messageReducer(state, action)
}