import { createReducer, on } from '@ngrx/store';
import { signIn, signOut } from '../action/signIn.actions';

export const initialState: boolean = false;

const _signinReducer = createReducer(initialState,
  on(signIn, state => state = true),
  on(signOut, state => state = false)
);


export function signinReducer(state, action) {
  return _signinReducer(state, action);
}