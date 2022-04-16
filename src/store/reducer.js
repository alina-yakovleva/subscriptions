import { SET_SUBS, SET_SUBS_LOADING } from "./constants";

const initialState = {
  subscriptions: [],
  isSubsLoading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SUBS:
      return { ...state, subscriptions: action.payload };
    case SET_SUBS_LOADING: {
      return { ...state, isSubsLoading: action.payload };
    }
    default:
      return state;
  }
};
export default reducer;
