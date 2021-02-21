import axios from "axios";
import { Dispatch } from "redux";
import { IAction } from "state/actions";
import { ACTION_TYPES } from "state/enums";

export function searchRepositories(text: string) {
  return async function (dispatch: Dispatch<IAction>) {
    dispatch({ type: ACTION_TYPES.SEARCH_REPOSITORIES });

    try {
      const { data } = await axios.get(
        "https://registry.npmjs.org/-/v1/search",
        {
          params: { text },
        }
      );

      const names = data.objects.map((result: any) => result.package.name);

      dispatch({
        type: ACTION_TYPES.SEARCH_REPOSITORIES_SUCCESS,
        payload: names,
      });
    } catch ({ message }) {
      dispatch({
        type: ACTION_TYPES.SEARCH_REPOSITORIES_ERROR,
        payload: message,
      });
    }
  };
}
