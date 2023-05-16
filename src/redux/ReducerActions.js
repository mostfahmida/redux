import { ADD, DELETE, UPDATE, COMPLET, FILTER } from "./type";

export const ADDED = (title) => {
  return {
    type: ADD,
    payload: title,
  };
};

export const COPMLETED = (id) => {
  return {
    type: COMPLET,
    payload: id,
  };
};

export const UPDATED = (id, updatedtask) => {
  return {
    type: UPDATE,
    payload: { id, updatedtask },
  };
};

export const DELETED = (id_deleted) => {
  return {
    type: DELETE,
    payload: id_deleted,
  };
};
export const filter = (isdone) => {
  return {
    type: FILTER,
    payload: isdone,
  };
};
