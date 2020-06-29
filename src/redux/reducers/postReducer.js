import {FETCH_POSTS, NEW_POST} from '../actions/postActions'

const initialState = {
  items:[],
  item:{}
}

const postReducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      }
    case NEW_POST:
      return {
        ...state,
        item :action.payload
      }
    default:
      return state
  }
}

export default postReducer