import { SET_SUBS, SET_SUBS_LOADING } from "./constants";
import * as api from "../api/subscription";

export const setSubs = (subs) => ({
  type: SET_SUBS,
  payload: subs,
});

export const setSubsLoading = (value) => ({
  type: SET_SUBS_LOADING,
  payload: value,
});
export const getSubsAsync = () => async (dispatch) => {
  dispatch(setSubsLoading(true));
  try {
    const subs = await api.getSubs();
    dispatch(setSubs(subs));
  } catch (e) {
    alert("Ошибка при выводе списка");
  } finally {
    dispatch(setSubsLoading(false));
  }
};
