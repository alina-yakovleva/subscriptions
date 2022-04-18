import {
  ADD_SUB,
  EDIT_SUB,
  REMOVE_SUB,
  SET_SUBS,
  SET_SUBS_LOADING,
} from "./constants";
import * as api from "../api/subscription";

export const setSubs = (subs) => ({
  type: SET_SUBS,
  payload: subs,
});

export const getSubsAsync = (value) => async (dispatch) => {
  dispatch(setSubsLoading(true));
  try {
    const subs = await api.getSubs(value);
    dispatch(setSubs(subs));
  } catch (e) {
    alert("Ошибка при выводе списка");
  } finally {
    dispatch(setSubsLoading(false));
  }
};

export const setSubsLoading = (value) => ({
  type: SET_SUBS_LOADING,
  payload: value,
});

export const removeSub = (id) => ({
  type: REMOVE_SUB,
  payload: id,
});

export const removeSubAsync = (id) => async (dispatch) => {
  try {
    await api.deleteSub(id);
    dispatch(removeSub(id));
  } catch {
    alert("Ошибка при удалении");
  }
};

export const addSub = (sub) => ({
  type: ADD_SUB,
  payload: sub,
});

export const addSubAsync = (sub) => async (dispatch) => {
  try {
    const newsub = await api.addSub(sub);
    dispatch(addSub(newsub));
  } catch {
    alert("Ошибка при добавлении");
  }
};

export const editSub = (sub) => ({
  type: EDIT_SUB,
  payload: sub,
});

export const editSubAsync = (id, data) => async (dispatch) => {
  try {
    const sub = await api.editSub(id, data);
    dispatch(editSub(sub));
  } catch (e) {
    alert("Не удалось изменить");
  }
};
