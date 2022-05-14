import {
  ADD_SUB,
  EDIT_INCOME,
  EDIT_SUB,
  REMOVE_SUB,
  SET_SUBS,
  SET_SUBS_LOADING,
  SET_USER,
} from "./constants";
import * as api from "../api";

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

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const loginAsync = (username, password) => async (dispatch) => {
  try {
    const [user] = await api.authorize(username, password);

    if (!user) {
      throw new Error("User is undefiend");
    }
    dispatch(setUser(user));

    return true;
  } catch (e) {
    alert("Неверный логин или пароль");
    return false;
  }
};
export const editIncome = (income) => ({
  type: EDIT_INCOME,
  payload: income,
});

export const editIncomeAsync = (income) => async (dispatch, getState) => {
  try {
    const state = getState();
    const user = await api.editIncome(state.user.id, income);
    dispatch(setUser(user));
  } catch (e) {
    alert("Не удалось изменить");
  }
};
