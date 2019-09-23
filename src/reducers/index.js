import {
  ADD_ARTICLE,
  REMOVE_ARTICLE,
  FOUND_BAD_WORD,
  DATA_LOADED,
  API_ERRORED
} from "../constants/action-types";

const initialState = {
  articles: [],
  alert: "",
  remoteArticles: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE: {
      return {
        ...state,
        articles: [...state.articles, action.payload],
        alert: ""
      };
    }
    case REMOVE_ARTICLE: {
      return {
        ...state,
        articles: [...state.articles].filter(el => el.id !== action.id)
      };
    }
    case FOUND_BAD_WORD: {
      return {
        ...state,
        articles: [],
        alert: action.payload
      };
    }
    case DATA_LOADED: {
      return {
        ...state,
        remoteArticles: [...state.remoteArticles, ...action.payload]
      };
    }
    case API_ERRORED: {
      return {
        ...state,
        alert: action.payload
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
