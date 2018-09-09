import * as Actions from './dogs.actions';
import { Action } from 'rxjs/scheduler/Action';

export const initialState = {};

export function DogsReducer(state = initialState, action: Actions.All) {
  switch (action.type) {
    case Actions.DOGS_LOAD_SUCCESS: {
      return { ...state, dogs: action.payload };
    }
    default: {
      return state;
    }
  }
}
