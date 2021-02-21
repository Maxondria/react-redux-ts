import { ACTION_TYPES } from "state/enums";

export interface IRepoState {
  loading: boolean;
  error: string | null;
  data: string[];
}

export interface ISearchReposAction {
  type: ACTION_TYPES.SEARCH_REPOSITORIES;
}

export interface ISearchReposSuccessAction {
  type: ACTION_TYPES.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}

export interface ISearchReposErrorAction {
  type: ACTION_TYPES.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

export type IAction =
  | ISearchReposAction
  | ISearchReposSuccessAction
  | ISearchReposErrorAction;
