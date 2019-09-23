import { ADD_ARTICLE } from "../constants/action-types";
import { badWordFound } from "../actions/index";

const forbiddenWords = ["spam", "money"];

export function forbiddenWordsMiddleware({ dispatch }) {
  return function(next) {
    return function(action) {
      if (action.type === ADD_ARTICLE) {
        const foundWord = forbiddenWords.filter(word =>
          action.payload.title.includes(word)
        );
        if (foundWord.length) {
          const message = `Upsss we saw a forbidden word in your article: ${foundWord}`;
          return dispatch(
            badWordFound({
              title: message
            })
          );
        }
      }
      return next(action);
    };
  };
}
