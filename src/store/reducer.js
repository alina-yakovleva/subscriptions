import {
  ADD_SUB,
  EDIT_INCOME,
  EDIT_SUB,
  REMOVE_SUB,
  SET_SUBS,
  SET_SUBS_LOADING,
  SET_USER,
} from "./constants";

const initialState = {
  subscriptions: [],
  isSubsLoading: false,
  user: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SUBS:
      return { ...state, subscriptions: action.payload };
    case SET_SUBS_LOADING: {
      return { ...state, isSubsLoading: action.payload };
    }
    case REMOVE_SUB: {
      const id = action.payload;
      return {
        ...state,
        subscriptions: state.subscriptions.filter((sub) => sub.id !== id),
      };
    }
    case ADD_SUB: {
      const sub = action.payload;

      return { ...state, subscriptions: [...state.subscriptions, sub] };
    }
    case EDIT_SUB: {
      const sub = action.payload;

      return {
        ...state,
        subscriptions: state.subscriptions.map((s) =>
          s.id === sub.id ? sub : s
        ),
      };
    }
    case SET_USER: {
      return { ...state, user: action.payload };
    }
    case EDIT_INCOME: {
      const income = action.payload;
      return { ...state, user: { ...state.user, income } };
    }

    default:
      return state;
  }
};
export default reducer;
