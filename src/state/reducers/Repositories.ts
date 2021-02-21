import { IAction, IRepoState } from "state/actions";
import { ACTION_TYPES } from "state/enums";

const initialState: IRepoState = {
  loading: false,
  error: null,
  data: [],
};

const repositories = (
  state: IRepoState = initialState,
  action: IAction
): IRepoState => {
  switch (action.type) {
    case ACTION_TYPES.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] };
    case ACTION_TYPES.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ACTION_TYPES.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] };

    default:
      return state;
  }
};

export default repositories;
