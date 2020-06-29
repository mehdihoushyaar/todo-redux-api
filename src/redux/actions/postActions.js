import axios from "axios"

export const FETCH_POSTS = 'FETCH_POSTS'
export const NEW_POST = 'NEW_POST'


// fetchposts actionCreator
export const fetchPosts = () => dispatch => {
  axios
  .get('http://localhost:8000/todos')
  .then(res => dispatch({
    type: FETCH_POSTS,
    payload: res.data
  }))
  .catch(err => console.log(err))
}


// newPost actionCreator
export const newPost = (Data) => dispatch =>{
  fetch('http://localhost:8000/todos',{
    method: 'POST',
    headers: {'content-type' : 'application/json'},
    body: JSON.stringify(Data)
  })
  .then(res => res.json())
  .then(data => dispatch({
    type: NEW_POST,
    payload: data
  }))
}