import axios from 'axios';
import { createStore, applyMiddleware } from 'redux';
//I was getting weird errors from my loggerMiddleware so I took it out. But you should have it!
//import loggerMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

//ACTION TYPES

const GET_UNICORNS = "GET_UNICORNS";

//ACTION CREATORS

const setUnicorns = (unicorns) => {
  return { type: GET_UNICORNS, unicorns };
};


//THUNK CREATORS

export const fetchUnicorns = () => {
  return async dispatch => {
    try {
      const unicorns = await axios.get("/api/unicorns")
      dispatch(setUnicorns(unicorns.data))
    }
    catch (err) {
      console.log(err)
    }
  }
}

//REDUCER

const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_UNICORNS:
      const unicorns = action.unicorns
      return {...state, unicorns}
    default:
      return state;
  }
}

export default createStore(reducer, applyMiddleware(thunkMiddleware))


