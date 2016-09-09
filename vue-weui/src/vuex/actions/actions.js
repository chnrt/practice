import {
  SET_ROUTER,
  DELETE_ROUTER,
} from '../mutations_type';

export const setRouter = ({ dispatch }, router) => dispatch(SET_ROUTER, router);

export const deleteRouter = ({ dispatch }, path) => dispatch(DELETE_ROUTER, path);
