import { FETCH_USERS } from '../redux/types';

const initialState = {
  items: []
};

// action
export const fetchUsers = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users =>
      dispatch({
        type: FETCH_USERS,
        payload: users
      })
    );
};

// reducer
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
}