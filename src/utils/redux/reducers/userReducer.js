import {
    INIT_USER,
  } from '../actionTypes'
  
  const initialStateUser = {user: null}
  
  const usersReducer = (state = initialStateUser, action) => {
    switch (action.type) {
      case INIT_USER:
        return { ...state, user: action.payload }
  
      default:
        return state
    }
  }
  
  export default usersReducer