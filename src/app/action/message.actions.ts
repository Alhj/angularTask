import { props, createAction } from '@ngrx/store'

export const setMessage = createAction(
  '[message] setMessage',
  props<{ message: string }>()
)

export const clearMessage = createAction('[message] clear')