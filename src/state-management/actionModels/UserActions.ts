import { FetchUserDetailsActionType } from "../actionTypes/UserActionType";
import {  userDetailsV1Response } from "../api/User";

interface UserDetailsFetchRequestAction {
    type: FetchUserDetailsActionType.FETCH_USER_DETAILS_REQUEST;
}

interface UserDetailsFetchSuccessAction {
    type: FetchUserDetailsActionType.FETCH_USER_DETAILS_SUCCESS;
    payload: userDetailsV1Response|null;
}

interface UserDetailsFetchFailAction {
    type: FetchUserDetailsActionType.FETCH_USER_DETAILS_FAIL;
    payload: string[] | null
}


export type FetchUserDetailsAction =
    | UserDetailsFetchRequestAction
    | UserDetailsFetchSuccessAction
    | UserDetailsFetchFailAction