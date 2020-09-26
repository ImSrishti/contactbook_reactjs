import { ADD, EDIT, DELETE } from "./actionTypes";

export const add = content => ({
  type: ADD,
  payload: {
    content
  }
});
export const edit = content => ({
  type: EDIT,
  payload: {
    content
  }
});
export const remove = content => ({
  type: DELETE,
  payload: {
    content
  }
});
export const changeSort = content => ({
  type: 'SORT',
  payload: {
    content
  }
});